import React from "react";
import { SwalAlert, SwalConfirm } from "../../lib/script";
import { Link } from "react-router-dom";
import { db } from "../../utils/firebase";
import { TablePagination } from "@mui/material";

export default function MyDataTable({
  tableName,
  orderBy = "name",
  headerList,
  bodyList,
  actionLinkCreate = "",
  actLinkEdit = "",
}) {
  const [dataTable, setDataTable] = React.useState([]);
  const [dataCount, setDataCount] = React.useState(0);
  const [search, setSearch] = React.useState("");

  const [currentPage, setCurrentPage] = React.useState(0);
  const [pageKeyMap, setPageKeyMap] = React.useState(new Map());
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const tbQuery = db.collection(tableName).orderBy(orderBy);

  React.useEffect(() => {
    console.log("init");
    pageKeyMap.set(0, "");
    async function paginatedCount() {
      const query = tbQuery;

      let lastDoc = {};
      let count = 0;
      let page = 0;
      while (true) {
        const offsetQuery =
          Object.keys(lastDoc).length !== 0 ? query.startAfter(lastDoc) : query;
        const snapshot = await offsetQuery.limit(rowsPerPage).get();
        const size = snapshot.size;

        if (snapshot.empty || size === 0) break;

        if (page === 0) {
          setDataTable(
            snapshot.docs.map((doc) => ({
              ...doc.data(),
              id: doc.id,
            }))
          );
        }
        count += size;
        lastDoc = snapshot.docs[size - 1];
        pageKeyMap.set(++page, lastDoc);
        setPageKeyMap(pageKeyMap);
      }

      setDataCount(count);
    }
    paginatedCount();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleOnChange = (e) => {
    setSearch(e.target.value);
  };

  const searchProduct = (e) => {
    e.preventDefault();
    console.log("searchProduct");
    var q = search;
    tbQuery
      .startAt(q)
      .endAt(q + "\uf8ff")
      .get()
      .then((snapshot) => {
        if (!snapshot.empty) {
          setDataTable(
            snapshot.docs.map((doc) => ({
              ...doc.data(),
              id: doc.id,
            }))
          );
          setDataCount(snapshot.size);
        } else {
          SwalAlert.fire("ไม่พบข้อมูล");
        }
      });
  };

  const delProduct = (id) => {
    SwalConfirm.fire({
      title: "ยืนยันการลบ",
    }).then((result) => {
      if (result.value) {
        tbQuery.doc(id).delete();
      }
    });
  };

  const handleChangePage = (e, page) => {
    const key = pageKeyMap.get(page);
    tbQuery
      .startAfter(key)
      .limit(rowsPerPage)
      .get()
      .then((snapshot) => {
        if (!snapshot.empty) {
          setDataTable(
            snapshot.docs.map((doc) => ({
              ...doc.data(),
              id: doc.id,
            }))
          );
          setCurrentPage(page);
        }
      });
  };

  const handleChangeRowsPerPage = (e) => {
    console.log("handleChangeRowsPerPage");
    setRowsPerPage(e.target.value);
  };

  return (
    <>
      <section className="content">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-header">
                  <div className="card-title">
                    <form onSubmit={searchProduct}>
                      <div
                        className="input-group input-group-sm"
                        style={{ width: 150 }}
                      >
                        <input
                          type="text"
                          name="queryName"
                          className="form-control"
                          placeholder="Search"
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
                  <div className="card-tools">
                    <Link
                      to={actionLinkCreate}
                      className="btn btn-warning float-right d-inline"
                    >
                      เพิ่ม
                    </Link>
                  </div>
                </div>
                <div className="card-body">
                  <div className=" table-responsive p-0">
                    <table className="table table-hover text-nowrap">
                      <thead>
                        <tr>
                          {headerList
                            ? headerList.map((value, index) => (
                                <th key={index}>{value}</th>
                              ))
                            : ""}
                          <th width="1" className="text-center">
                            Action
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {dataTable
                          ? dataTable.map((item) => (
                              <tr key={item.id}>
                                {bodyList
                                  ? bodyList.map((value, index) => {
                                      const dataValue = item[value] + "";
                                      if (!dataValue.startsWith("http")) {
                                        // normal case
                                        return (
                                          <td
                                            key={index}
                                            className="align-middle"
                                          >
                                            {dataValue}
                                          </td>
                                        );
                                      } else {
                                        // img case
                                        return (
                                          <td
                                            key={index}
                                            className="align-middle"
                                          >
                                            <div
                                              className="text-center position-relative"
                                              style={{
                                                width: "60px",
                                                height: "60px",
                                                border:
                                                  "1px dashed rgb(182 186 189)",
                                                cursor: "pointer",
                                              }}
                                            >
                                              <img
                                                src={dataValue}
                                                className="w-100 position-absolute"
                                                style={{
                                                  left: "50%",
                                                  top: "50%",
                                                  transform:
                                                    "translate(-50%, -50%)",
                                                }}
                                                alt=""
                                              />
                                            </div>
                                          </td>
                                        );
                                      }
                                    })
                                  : ""}

                                <td className="align-middle">
                                  <Link
                                    to={`${actLinkEdit}/${item.id}`}
                                    className="btn btn-primary mr-2"
                                  >
                                    <i className="fas fa-edit"></i>
                                  </Link>
                                  <button
                                    type="button"
                                    className="btn btn-danger"
                                    onClick={() => delProduct(item.id)}
                                  >
                                    <i className="fas fa-trash"></i>
                                  </button>
                                </td>
                              </tr>
                            ))
                          : ""}
                      </tbody>
                    </table>
                  </div>
                  <TablePagination
                    component="div"
                    count={dataCount}
                    page={currentPage}
                    onPageChange={handleChangePage}
                    rowsPerPage={rowsPerPage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                  />
                </div>
                {/* /.card-body */}
              </div>
              {/* /.card */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
