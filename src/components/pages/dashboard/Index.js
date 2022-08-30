import React, { useState, useEffect } from "react";
import Select from "react-select";
import Zoom from "react-medium-image-zoom";
import { db } from "../../../utils/firebase";
import { constScheduleMenu } from "../../../lib/Constant";
import "react-medium-image-zoom/dist/styles.css";

const DashBoard = () => {
  const [dataSchedule, setDataSchedule] = useState("ทุกพระ 8|ทุกพระ 8,15");
  const [dataTable, setDataTable] = useState(new Set());

  const tbOrderSchedules = db.collection("tbOrderSchedules");

  useEffect(() => {
    getInit(dataSchedule);
    return () => {
      setDataTable([]);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataSchedule]);

  async function getInit(dataSchedule) {
    const query = await tbOrderSchedules
      .where("schedule", "in", dataSchedule.split("|"))
      .get();
    var result = [];
    query.docs.forEach((doc) => {
      var models = doc.data().orderScheduleItems;

      models.forEach((item) => {
        if (!result.some((e) => e.products_id === item.products_id)) {
          result.push(item);
        } else {
          const objIndex = result.findIndex(
            (obj) => obj.products_id === item.products_id
          );
          result[objIndex].qty =
            parseInt(result[objIndex].qty) + parseInt(item.qty);
        }
      });
    });
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
          </div>

          <div className="row mt-4">
            <div className="col-12">
              {dataTable.length > 0
                ? dataTable
                    .sort((a, b) =>
                      a.products_name.localeCompare(b.products_name)
                    )
                    .map((item) => (
                      <div
                        className="info-box border-0 rounded-0 m-0"
                        key={item.products_id}
                      >
                        <span className="info-box-icon">
                          <Zoom>
                            <div className="text-center position-relative thumbnail-product">
                              <img
                                src={
                                  item.products_thumbnail !== ""
                                    ? item.products_thumbnail
                                    : "/images/no-image.png"
                                }
                                alt={item.products_name}
                              />
                            </div>
                          </Zoom>
                        </span>
                        <div className="info-box-content">
                          <span className="info-box-text text-md">
                            {item.products_name +
                              (item.products_subType !== "" &&
                              item.products_subType !== "-"
                                ? " (" + item.products_subType + ")"
                                : "")}
                          </span>
                          <span className="info-box-number text-lg">
                            {item.products_price} ฿
                          </span>
                        </div>
                        <div className="info-box-content">
                          <span className="info-box-text text-xl text-right">
                            x {item.qty}
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
};

export default DashBoard;
