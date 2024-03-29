import React, { useState, useEffect } from "react";
import { db } from "../../../utils/firebase";
import { SwalConfirm, SwalToast } from "../../../lib/script";
import { constScheduleMenu, constDelivery } from "../../../lib/Constant";
import { LazyLoadImage } from "react-lazy-load-image-component";
import moment from "moment";
import Select from "react-select";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

export default function MyOrderSchedule() {
  const [dataTable, setDataTable] = useState([]);
  const [dataSchedule, setDataSchedule] = useState("ทุกพระ 8|ทุกพระ 8,15");
  const [dataDelivery, setDataDelivery] = useState("ไปส่งที่บ้าน");
  const [search, setSearch] = useState("");

  const tbOrderSchedules = db.collection("tbOrderSchedules");

  useEffect(() => {
    getInit(dataSchedule, dataDelivery, "");
    return () => {
      setDataTable([]);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataSchedule, dataDelivery]);

  async function getInit(dataSchedule, dataDelivery, search) {
    const query = await tbOrderSchedules
      .where("delivery", "==", dataDelivery)
      .where("schedule", "in", dataSchedule.split("|"))
      .get();
    // listen every time data change in todo ref
    setDataTable(
      query.docs
        .filter((doc) => {
          var models = doc.data();
          var isSameDate =
            moment(models.deliverTime, "YYYY-MM-DD").format("YYYY-MM-DD") ===
            moment().format("YYYY-MM-DD");
          if (search !== "") {
            if (models.users_name.indexOf(search) !== -1) {
              return true;
            }
            return false;
          } else {
            return !isSameDate;
          }
        })
        .map((doc) => {
          var models = doc.data();
          return { ...models, id: doc.id };
        })
    );
  }

  const handleDeliverClick = (id) => {
    setDataTable(dataTable.filter((x) => x.id !== id));
    SwalToast.fire();
  };

  const handleOnChange = (e) => {
    setSearch(e.target.value);
  };

  const searchUser = (e) => {
    e.preventDefault();
    console.log("searchUser" + search);
    getInit(dataSchedule, dataDelivery, search);
  };

  return (
    <>
      <section className="content-header">
        <div className="container">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1>จัดส่ง</h1>
            </div>
          </div>
        </div>
      </section>

      <section className="content">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <Select
                options={constScheduleMenu}
                id="schedule"
                onChange={(e) => {
                  setDataSchedule(e.value);
                }}
                isSearchable={false}
                value={constScheduleMenu.filter(
                  (options) => options.value === dataSchedule
                )}
              />
            </div>
            <div className="col-12 mt-1">
              <Select
                options={constDelivery}
                id="delivery"
                onChange={(e) => {
                  setDataDelivery(e.value);
                }}
                isSearchable={false}
                value={constDelivery.filter(
                  (options) => options.value === dataDelivery
                )}
              />
            </div>
            <div className="col-12 mt-1">
              <form onSubmit={searchUser}>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="ค้นหาชื่อ"
                    onChange={handleOnChange}
                  />
                  <div className="input-group-append">
                    <button type="submit" className="btn btn-default">
                      <i className="fas fa-search" />
                    </button>
                  </div>
                </div>
              </form>
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
    </>
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
          createDate: moment().format(),
          isactive: 1,
          orderTypeId: 1,
          orderTypeName: "ลูกค้าประจำ",
          tbOrderScheduleId: item.id,
          tbOrderSchedule: item,
        };
        console.log(modelOrder);
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
    <>
      <div className="card card-outline card-primary">
        <div className="card-body p-3">
          <div className="row">
            <div className="col-8 text-lg text-bold">{item.users_name}</div>
            <div
              className={
                "col-4 text-md text-mute text-right d-table " +
                (item.delivery === "มาเอาที่ตลาด" ? "text-green" : "text-red")
              }
            >
              <div className="d-table-cell align-middle">{item.delivery}</div>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-12">
              {item.orderScheduleItems.map((orderScheduleItem, index) => (
                <div className="info-box border-0 rounded-0 m-0" key={index}>
                  <span className="info-box-icon">
                    <Zoom>
                      <div className="text-center position-relative thumbnail-product">
                        <LazyLoadImage
                          src={
                            orderScheduleItem.products_thumbnail !== ""
                              ? orderScheduleItem.products_thumbnail
                              : "/images/no-image.png"
                          }
                          alt={orderScheduleItem.products_name}
                        />
                      </div>
                    </Zoom>
                  </span>
                  <div className="info-box-content">
                    <span className="info-box-text text-md">
                      {orderScheduleItem.products_name +
                        (orderScheduleItem.products_subType !== "" &&
                        orderScheduleItem.products_subType !== "-"
                          ? " (" + orderScheduleItem.products_subType + ")"
                          : "")}
                    </span>
                    <span className="info-box-number text-lg">
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
          {item.remark ? (
            <div className="row mt-2">
              <div className="col-12 text-orange text-bold text-lg">
                หมายเหตุ: {item.remark}
              </div>
            </div>
          ) : (
            ""
          )}
          <div className="row mt-3">
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
    </>
  );
}
