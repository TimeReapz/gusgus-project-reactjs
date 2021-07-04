import Swal from "sweetalert2";

const SwalToast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 10000,
});
const SwalConfirm = Swal.mixin({
  title: "ยืนยันการทำรายการ",
  text: "",
  type: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  cancelButtonText: "ยกเลิก",
  confirmButtonText: "ยืนยัน",
});
const SwalAlert = Swal.mixin({
  type: "error",
  title: "ผิดพลาด",
  text: "",
  allowOutsideClick: false,
});

export { SwalToast, SwalConfirm, SwalAlert };
