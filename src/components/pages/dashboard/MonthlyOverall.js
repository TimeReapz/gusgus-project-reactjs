import React, { useState, useEffect } from "react";
import { db } from "../../../utils/firebase";
import moment from "moment";
import commaNumber from "comma-number";

export default function MonthlyOverall() {
  const [dataSchedule, setDataSchedule] = useState("ทุกพระ 8|ทุกพระ 8,15");
  const [dataTable, setDataTable] = useState(new Set());

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

    query.docs.forEach((doc) => {
      var data = doc.data();
      var createDate = moment(data.create_date, "YYYY-MM-DD").format("MM MMMM");

      if (!result.some((e) => e.groupDate === createDate)) {
        if (data.tbOrderSchedule.totalPrice !== "") {
          result.push({
            groupDate: createDate,
            totalPrice: parseInt(data.tbOrderSchedule.totalPrice),
          });
        }
      } else {
        const objIndex = result.findIndex(
          (obj) => obj.groupDate === createDate
        );
        if (data.tbOrderSchedule.totalPrice !== "") {
          result[objIndex].totalPrice =
            parseInt(result[objIndex].totalPrice) +
            parseInt(data.tbOrderSchedule.totalPrice);
        } else {
          result[objIndex].totalPrice =
            parseInt(result[objIndex].totalPrice) + 0.01;
        }
      }
    });
    console.log(result);
    setDataTable(result);
  }

  return (
    <>
      <section className="content-header">
        <div className="container">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1>สรุปรายเดือนทั้งหมด</h1>
            </div>
          </div>
        </div>
      </section>

      <section className="content">
        <div className="container">
          <div className="row">
            <div className="col-12">
              {dataTable.length > 0
                ? dataTable
                    .sort((a, b) => a.groupDate.localeCompare(b.groupDate))
                    .map((item) => (
                      <div
                        className="info-box border-0 rounded-0 m-0"
                        key={item.groupDate}
                      >
                        <div className="info-box-content">
                          <span className="info-box-text text-md">
                            {item.groupDate}
                          </span>
                        </div>
                        <div className="info-box-content">
                          <span className="info-box-text text-xl text-right">
                            {commaNumber(item.totalPrice)} ฿
                          </span>
                        </div>
                      </div>
                    ))
                : "ไม่พบข้อมูล"}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
