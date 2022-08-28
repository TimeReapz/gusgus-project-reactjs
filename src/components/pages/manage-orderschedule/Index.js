import React from "react";
import MyDataTable from "../../genaral/MyDataTable-v1";

export default function Index() {
  return (
    <div>
      <section className="content-header">
        <div className="container">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1>รายการจัดส่ง(ลูกค้าประจำ)</h1>
            </div>
          </div>
        </div>
      </section>

      <MyDataTable
        tableName="tbOrderSchedules"
        orderBy="users_name"
        headerList={["ชื่อลูกค้า", "วันที่จัดส่ง", "วิธีการจัดส่ง", "ราคา"]}
        bodyList={["users_name", "schedule", "delivery", "totalPrice"]}
        actionLinkCreate={"manageorder-schedule/create"}
        actLinkEdit={"manageorder-schedule"}
      />
    </div>
  );
}
