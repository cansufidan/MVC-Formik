import * as yup from 'yup';

// Kaynak: https://stackoverflow.com/questions/19605150/regex-for-password-must-contain-at-least-eight-characters-at-least-one-number-a
const passwordRules =
  '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{5,}$';

export const schema = yup.object().shape({
    email: yup
    .string()
    .email("Lütfen geçerli bir email giriniz")
    .required("Zorunlu Alan"),
    age: yup
    .number()
    .positive()
    .min(18, '18 yaşından küçükler giremez')
    .max(100, 'Yaşınız 100den büyük olamaz')
    .required("Zorunlu Alan"),
    password: yup
    .string()
    .min(5, "Şifre en az 5 karakter olmalı")
    .matches(passwordRules, 'Lütfen daha güçlü bir şifre giriniz')
    .required("Zorunlu Alan"),
    confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")],
    'Şifre eşleşmiyor'
    )
    .required('Zorunlu Alan'),
    terms: yup
    .boolean()
    .isTrue('Koşulları kabul etmeden devam edemezsiniz.'),
})