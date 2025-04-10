import * as Yup from "yup";

export const registerSchema = Yup.object().shape({
  full_name: Yup.string().required("الاسم الكامل مطلوب"),
  email: Yup.string()
    .email("يرجى إدخال بريد إلكتروني صحيح")
    .required("الإيميل مطلوب"),
  phone: Yup.string()
    .required("رقم الموبايل مطلوب")
    .matches(/^\+?[0-9]{7,15}$/, "يرجى إدخال رقم موبايل صحيح"),
  password: Yup.string()
    .min(8, "كلمة المرور يجب أن تحتوي على 8 أحرف على الأقل")
    .matches(/[A-Z]/, "كلمة المرور يجب أن تحتوي على حرف كبير واحد على الأقل")
    .matches(/[a-z]/, "كلمة المرور يجب أن تحتوي على حرف صغير واحد على الأقل")
    .matches(/[0-9]/, "كلمة المرور يجب أن تحتوي على رقم واحد على الأقل")
    .matches(
      /[$&+,:;=?@#|'<>.^*()%!-]/,
      "كلمة المرور يجب أن تحتوي على رمز خاص مثل $ أو &"
    )
    .required("كلمة المرور مطلوبة"),
  password_confirmation: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "كلمة المرور غير مطابقة"
  ),
  nationality: Yup.string().required("الجنسية مطلوبة"),
  address: Yup.string().required("العنوان مطلوب"),
});

export const loginSchema = Yup.object().shape({
  phoneEmail: Yup.string()
    .required("الإيميل أو رقم الموبايل مطلوب")
    .test(
      "is-email-or-phone",
      "يرجى إدخال بريد إلكتروني صحيح أو رقم موبايل صحيح",
      function (value) {
        const phoneRegex = /^\+?[0-9]{7,15}$/;
        const isPhone = phoneRegex.test(value || "");
        const isEmail = Yup.string().email().isValidSync(value || "");

        return isPhone || isEmail;
      }
    ),

  password: Yup.string()
    .min(8, "كلمة المرور يجب أن تحتوي على 8 أحرف على الأقل")
    .matches(/[A-Z]/, "كلمة المرور يجب أن تحتوي على حرف كبير واحد على الأقل")
    .matches(/[a-z]/, "كلمة المرور يجب أن تحتوي على حرف صغير واحد على الأقل")
    .matches(/[0-9]/, "كلمة المرور يجب أن تحتوي على رقم واحد على الأقل")
    .required("كلمة المرور مطلوبة"),
});