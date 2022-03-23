import React, { useState, useEffect } from "react";
import { db } from "../../../utils/firebase";
import { SwalConfirm, SwalToast } from "../../../lib/script";
import moment from "moment";
import Select from "react-select";

export default function Home() {
  const [dataTable, setDataTable] = useState([]);
  const [dataSchedule, setDataSchedule] = useState("ทุกพระ 8");

  const schedule = [
    { value: "ทุกพระ 8", label: "ทุกพระ 8" },
    { value: "ทุกพระ 15", label: "ทุกพระ 15" },
    { value: "วันโกน", label: "วันโกน" },
    { value: "วันพฤหัส", label: "วันพฤหัส" },
    { value: "วันอาทิตย์", label: "วันอาทิตย์" },
  ];

  const tbOrderSchedules = db.collection("tbOrderSchedules");

  useEffect(() => {
    const q = dataSchedule;
    async function getInit() {
      const query = await tbOrderSchedules.orderBy("schedule").startAt(q).get();
      // listen every time data change in todo ref
      setDataTable(
        query.docs
          .filter((doc) => {
            var models = doc.data();
            var isSameDate =
              moment(models.deliverTime, "YYYY-MM-DD").format("YYYY-MM-DD") ===
              moment().format("YYYY-MM-DD");
            return !isSameDate;
          })
          .map((doc) => {
            var models = doc.data();
            return { ...models, id: doc.id };
          })
      );
    }
    getInit();
    return () => {
      setDataTable([]);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataSchedule]);

  const handleDeliverClick = (id) => {
    setDataTable(dataTable.filter((x) => x.id !== id));
    SwalToast.fire();
  };

  return (
    <div>
      <section className="content-header">
        <div className="container">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1>รายการจัดส่ง</h1>
            </div>
          </div>
        </div>
      </section>

      <section className="content">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <Select
                options={schedule}
                id="schedule"
                onChange={(e) => {
                  setDataSchedule(e.value);
                }}
                isSearchable={false}
                value={schedule.filter(
                  (options) => options.value === dataSchedule
                )}
              />
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-12 text-right">
              <span className="text-sm">ทั้งหมด {dataTable.length} รายการ</span>
            </div>
          </div>

          <div className="row mt-2">
            <div className="col-12">
              {dataTable.length > 0
                ? dataTable.map((item) => (
                    <OrderScheduleBox
                      item={item}
                      key={item.id}
                      onDeliverClick={handleDeliverClick}
                    />
                  ))
                : "ไม่พบข้อมูล"}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function OrderScheduleBox({ item, onDeliverClick }) {
  const tbOrders = db.collection("tbOrders");
  const tbOrderSchedules = db.collection("tbOrderSchedules");

  const deliver = () => {
    SwalConfirm.fire({
      title: "ยืนยันการจัดส่ง",
    }).then((result) => {
      if (result.value) {
        // insert tbOrder
        let modelOrder = {
          create_date: moment().format(),
          isactive: 1,
          orderTypeId: 1,
          orderTypeName: "ลูกค้าประจำ",
          tbOrderScheduleId: item.id,
          tbOrderSchedule: item,
        };
        const modelOrderRef = tbOrders.doc();
        modelOrderRef.set(modelOrder, { merge: true });

        // insert tbHistory
        const modelOrderScheduleRef = tbOrderSchedules.doc(item.id);
        modelOrderScheduleRef.update({ deliverTime: moment().format() });
        onDeliverClick(item.id);
      }
    });
  };
  return (
    <div>
      <div className="card card-outline card-primary">
        <div className="card-body p-3">
          <div className="row">
            <div className="col-8 text-lg text-bold">{item.users_name}</div>
          </div>
          <div className="row mt-3">
            <div className="col-12">
              {item.orderScheduleItems.map((orderScheduleItem, index) => (
                <div className="info-box" key={index}>
                  <span className="info-box-icon">
                    <img
                      src={orderScheduleItem.products_thumbnail}
                      alt={orderScheduleItem.products_name}
                    />
                  </span>
                  <div className="info-box-content">
                    <span className="info-box-text text-md">
                      {orderScheduleItem.products_name +
                        (orderScheduleItem.products_subType !== ""
                          ? " (" + orderScheduleItem.products_subType + ")"
                          : "")}
                    </span>
                    <span className="info-box-number">
                      {orderScheduleItem.products_price} ฿
                    </span>
                  </div>
                  <div className="info-box-content">
                    <span className="info-box-text text-xl text-right">
                      x {orderScheduleItem.qty}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="row">
            <div className="col-6 text-lg d-table">
              <div className="d-table-cell align-middle">
                ราคารวม <b>{item.totalPrice} ฿</b>
              </div>
            </div>
            <div className="col-6">
              <button className="btn btn-primary btn-block" onClick={deliver}>
                จัดส่ง
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
