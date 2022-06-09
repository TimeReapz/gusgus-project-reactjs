import React from "react";
import { db } from "../../../utils/firebase";

export default function Index() {
  const tbOrderSchedules = db.collection("tbOrderSchedules");
  const tbProducts = db.collection("tbProducts");

  const updateProductInOrderSchedule = () => {
    // tbProducts
    //   .doc("9jhEpz28oJ0HsanWogxP")
    //   .get()
    //   .then((doc) => {
    //     if (doc.exists) {
    //       console.log("Document data:", doc.data());
    //     } else {
    //       // doc.data() will be undefined in this case
    //       console.log("No such document!");
    //     }
    //   });

    tbOrderSchedules.get().then((snap) => {
      snap.forEach((doc) => {
        var orderItem = doc.data().orderScheduleItems.map(async (item) => {
          console.log(item.products_id);
          var snap = await tbProducts.doc(item.products_id).get();
          var product = snap.data();

          item = {
            ...item,
            products_name: product.name,
            products_price: product.price,
            products_subType: product.subType,
            products_thumbnail: product.thumbnail,
          };

          return item;
        });
        Promise.all(orderItem).then((results) => {
          console.log(doc.id, " => ", results);
          tbOrderSchedules
            .doc(doc.id)
            .set({ orderScheduleItems: results }, { merge: true });
        });
      });
    });
  };

  return (
    <div>
      <section className="content-header">
        <div className="container">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1>ตั้งค่า</h1>
            </div>
          </div>
        </div>
      </section>

      <section className="content">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-header">
                  <div className="card-title">ตั้งค่า</div>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-12">
                      <button
                        className="btn btn-info"
                        onClick={updateProductInOrderSchedule}
                        value="Update"
                      >
                        อัพเดทสินค้าในรายการจัดส่ง
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
