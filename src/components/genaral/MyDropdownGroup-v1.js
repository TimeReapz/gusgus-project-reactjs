// import React from "react";
// import { db } from "../../utils/firebase";
// import Select from "react-select";

// function MyDropdownGroup({ tableName, orderBy, groupBy }) {
//   const [productDropdownGroup, setProductDropdownGroup] = React.useState([]);
//   const [productDropdown, setProductDropdown] = React.useState([]);

//   const tbQuery = db.collection(tableName).orderBy(orderBy);
//   React.useEffect(() => {
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//     async function getDropDownProducts() {
//       const snapshot = await tbQuery.get();

//       const productList = snapshot.docs.map((doc) => ({
//         value: doc.id,
//         label:
//           doc.data().name +
//           (doc.data().subType !== "" ? "(" + doc.data().subType + ")" : "") +
//           " " +
//           doc.data().price +
//           "฿",
//         price: doc.data().price,
//         nameGroup: doc.data().name,
//         products: doc.data(),
//       }));
//       setProductDropdown(productList);

//       const nameGroupArr = productList.map((x) => x.nameGroup);
//       const unique = [...new Set(nameGroupArr)];
//       console.log(productList);
//       const productGroup = unique
//         .sort((a, b) => a - b)
//         .map((doc) => ({
//           label: doc,
//           options: productList.filter((x) => x.nameGroup === doc),
//         }));
//       console.log(productGroup);
//       setProductDropdownGroup(productGroup);
//     }
//     getDropDownProducts();

//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);
//   return <>xxx</>;
// }

// export default MyDropdownGroup;
