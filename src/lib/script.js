import Swal from "sweetalert2";

const SwalToast = Swal.mixin({
  icon: "success",
  title: "บันทึกสำเร็จ.",
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  padding: "5px 10px",
  showClass: {
    popup: "animate__animated animate__fadeInRightBig",
  },
  hideClass: {
    popup: "animate__animated animate__fadeOutUp",
  },
});

const SwalConfirm = Swal.mixin({
  title: "ยืนยันการทำรายการ",
  text: "",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  cancelButtonText: "ยกเลิก",
  confirmButtonText: "ยืนยัน",
  reverseButtons: true,
});

const SwalAlert = Swal.mixin({
  title: "ผิดพลาด",
  text: "",
  allowOutsideClick: false,
});

export { SwalToast, SwalConfirm, SwalAlert };
