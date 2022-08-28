import React, { useState, useEffect } from "react";
import { db } from "../../../utils/firebase";
import Select from "react-select";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const schedule = [
  { value: "ทุกพระ 8|ทุกพระ 8,15", label: "ทุกพระ 8" },
  { value: "ทุกพระ 15|ทุกพระ 8,15", label: "ทุกพระ 15" },
  { value: "วันโกน", label: "วันโกน" },
  { value: "วันพฤหัส", label: "วันพฤหัส" },
  { value: "วันเสาร์", label: "วันเสาร์" },
  { value: "วันอาทิตย์", label: "วันอาทิตย์" },
  { value: "วันหวยออก", label: "วันหวยออก" },
];

const DashBoard = () => {
  const [dataSchedule, setDataSchedule] = useState("ทุกพระ 8|ทุกพระ 8,15");
  const [dataTable, setDataTable] = useState(new Set());
  const [value, onChange] = useState(new Date());

  const tbOrders = db.collection("tbOrders");

  useEffect(() => {
    getInit(dataSchedule);
    return () => {
      setDataTable([]);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataSchedule]);

  async function getInit(dataSchedule) {
    const query = await tbOrders
      .where("orderTypeName", "==", "ลูกค้าประจำ")
      .get();
    var result = [];

    var newCount = 0;
    query.docs.forEach((doc) => {
      if (doc.data().tbOrderSchedule.totalPrice !== "") {
        newCount = newCount + parseInt(doc.data().tbOrderSchedule.totalPrice);
      } else {
        console.log(doc.id);
      }
    });
    result.push({ id: 1, totalPrice: newCount });
    setDataTable(result);
  }
  return (
    <>
      <section className="content-header">
        <div className="container">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1>ภาพรวม</h1>
            </div>
          </div>
        </div>
      </section>

      <section className="content">
        <div className="container">
          <div className="row mt-4">
            <div className="col-12">
              {dataTable.length > 0
                ? dataTable.map((item) => (
                    <div
                      className="info-box border-0 rounded-0 m-0"
                      key={item.id}
                    >
                      <div className="info-box-content">
                        <span className="info-box-text text-md">aa</span>
                        <span className="info-box-number text-lg">aa ฿</span>
                      </div>
                      <div className="info-box-content">
                        <span className="info-box-text text-xl text-right">
                          x {item.totalPrice}
                        </span>
                      </div>
                    </div>
                  ))
                : "ไม่พบข้อมูล"}
            </div>
            <div className="col-12">
              <Calendar onChange={onChange} value={value} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DashBoard;
