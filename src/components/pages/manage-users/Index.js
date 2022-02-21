import React from "react";
import MyDataTable from "../../genaral/MyDataTable-v1";

export default function Index() {
  return (
    <>
      <section className="content-header">
        <div className="container">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1>รายชื่อลูกค้า</h1>
            </div>
          </div>
        </div>
      </section>

      <MyDataTable
        tableName="tbUsers"
        headerList={["ชื่อลูกค้า"]}
        bodyList={["name"]}
        actionLinkCreate={"manageuser/create"}
        actLinkEdit={"manageuser"}
      />
    </>
  );
}
