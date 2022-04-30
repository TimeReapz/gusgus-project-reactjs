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

// var Toast;
// const SwalToast = Swal.mixin({
//   icon: "success",
//   title: "บันทึกสำเร็จ.",
//   toast: true,
//   position: "top-end",
//   showConfirmButton: false,
//   timer: 500000,
//   timerProgressBar: true,
//   didOpen: (toast) => {
//     toast.addEventListener("mousedown", function (e) {
//       if (e.target && document.querySelectorAll(".swal2-popup").length) {
//         var $toast = document.querySelectorAll(".swal2-popup");
//         var toast = $toast[0].M_Toast;
//         toast.panning = true;
//         Toast = toast;
//         toast.el.classList.add("panning");
//         toast.el.style.transition = "";
//         toast.startingXPos = Toast._xPos(e);
//         toast.time = Date.now();
//         toast.xPos = Toast._xPos(e);
//       }
//     });
//     toast.addEventListener("mousemove", function (e) {
//       if (!!Toast) {
//         e.preventDefault();
//         var toast = Toast;
//         toast.deltaX = Math.abs(toast.xPos - Toast._xPos(e));
//         toast.xPos = Toast._xPos(e);
//         toast.velocityX = toast.deltaX / (Date.now() - toast.time);
//         toast.time = Date.now();

//         var totalDeltaX = toast.xPos - toast.startingXPos;
//         var activationDistance =
//           toast.el.offsetWidth * toast.options.activationPercent;
//         toast.el.style.transform = "translateX(" + totalDeltaX + "px)";
//         toast.el.style.opacity = 1 - Math.abs(totalDeltaX / activationDistance);
//       }
//     });
//     toast.addEventListener("mouseup", function (e) {
//       if (!!Toast) {
//         var toast = Toast;
//         toast.panning = false;
//         toast.el.classList.remove("panning");

//         var totalDeltaX = toast.xPos - toast.startingXPos;
//         var activationDistance =
//           toast.el.offsetWidth * toast.options.activationPercent;
//         var shouldBeDismissed =
//           Math.abs(totalDeltaX) > activationDistance || toast.velocityX > 1;

//         // Remove toast
//         if (shouldBeDismissed) {
//           toast.wasSwiped = true;
//           toast.dismiss();

//           // Animate toast back to original position
//         } else {
//           toast.el.style.transition = "transform .2s, opacity .2s";
//           toast.el.style.transform = "";
//           toast.el.style.opacity = "";
//         }
//         Toast = null;
//       }
//     });
//     //toast.addEventListener("mouseleave", Swal.resumeTimer);
//   },
//   padding: "5px 10px",
//   hideClass: {
//     popup: "animate__animated animate__fadeOutUp",
//   },
// });

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
