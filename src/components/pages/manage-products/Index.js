import React from "react";
import MyDataTable from "../../genaral/MyDataTable-v1";

export default function Index() {
  return (
    <>
      <section className="content-header">
        <div className="container">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1>รายชื่อสินค้า</h1>
            </div>
          </div>
        </div>
      </section>

      <MyDataTable
        tableName="tbProducts"
        headerList={["ชื่อสินค้า", "ประเภท", "ราคา", "รูป"]}
        bodyList={["name", "subType", "price", "thumbnail"]}
        actionLinkCreate={"manageproduct/create"}
        actLinkEdit={"manageproduct"}
      />
    </>
  );
}
