"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Icon from "./atom/Icon";

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);

  const items = [
    {
      id: 1,
      title: "Terpercaya",
      icon: (
        <svg
          width="72"
          height="46"
          viewBox="0 0 72 46"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.0457 34.1645C15.6408 33.9016 15.2242 33.4533 14.8709 32.8728C14.5232 32.2933 14.2506 31.5806 14.2495 30.8056C14.2475 30.222 14.4144 29.6037 14.8178 29.0457C15.2451 28.4575 15.9134 27.8612 16.6226 27.3828C17.3394 26.9116 18.0527 26.5455 18.7414 26.5302C18.7593 26.5302 18.7873 26.5302 18.8119 26.5322C19.5598 26.5716 20.367 26.9126 21.0323 27.4946C21.6914 28.0741 22.206 28.9308 22.2055 29.9729C22.206 31.0312 21.6735 32.2014 20.4369 33.3905C19.8207 33.9782 18.8747 34.6562 17.6907 34.6649H17.6825C17.1566 34.6751 16.5899 34.5219 16.0487 34.1747L16.0457 34.1645Z"
            fill="#05408C"
          />
          <path
            d="M22.2801 39.4641C21.236 39.456 20.243 38.9005 19.4812 38.1387C18.7261 37.3719 18.1778 36.3783 18.1712 35.3419C18.1691 34.7874 18.3468 34.2187 18.7425 33.751C19.7268 32.59 21.1972 31.4433 22.3158 31.0415C22.6549 30.9246 23.0332 30.8786 23.4309 30.8771C24.4796 30.8919 25.6692 31.1799 26.3773 31.9355C26.9001 32.5318 27.5378 33.4973 27.5511 34.6164C27.5552 35.1688 27.3668 35.7606 26.9221 36.2532C25.8213 37.4811 24.8186 38.4481 23.4743 39.1695C23.097 39.3722 22.688 39.4636 22.2847 39.4636L22.2796 39.4687L22.2801 39.4641Z"
            fill="#05408C"
          />
          <path
            d="M24.9195 41.6493C24.1971 41.078 23.6232 40.2851 23.614 39.3462C23.613 38.9678 23.7187 38.5768 23.9372 38.2173C24.578 37.1646 25.8053 35.9132 26.6437 35.0294C27.3487 34.2952 28.3122 33.7479 29.3542 33.7418C29.6993 33.7418 30.0521 33.8066 30.3891 33.9496C31.3775 34.381 32.4002 35.3991 32.4252 36.7541C32.4257 37.1538 32.3226 37.571 32.0989 37.9692C31.2841 39.4023 30.1675 41.4297 28.6369 42.3115C28.2718 42.5157 27.8644 42.5999 27.457 42.5999C26.5635 42.5948 25.6496 42.217 24.9195 41.6503V41.6493Z"
            fill="#05408C"
          />
          <path
            d="M28.412 43.1555C28.3624 42.9972 28.3425 42.8374 28.3425 42.6776C28.3502 42.0455 28.6249 41.4084 28.9741 40.7748C29.3289 40.1473 29.7757 39.5402 30.1897 39.0664C30.7672 38.3996 31.4891 38.0969 32.1548 38.1005C32.6608 38.1005 33.1254 38.2643 33.4986 38.5247C34.0383 38.8852 34.6423 39.6454 34.6275 40.9044C34.6264 41.3384 34.5636 41.8301 34.4232 42.3968C34.8153 42.6087 35.3657 42.8874 35.7823 43.0631L36.5553 43.3868L35.9054 43.9162C35.1069 44.5636 33.7626 45.502 32.0185 45.5071C31.8291 45.5071 31.6366 45.4953 31.4401 45.4719C30.4879 45.3549 29.8058 45.0935 29.3172 44.6677C28.8271 44.2491 28.5871 43.7079 28.4135 43.1616"
            fill="#05408C"
          />
          <path
            d="M41.9617 43.6711C39.4079 43.1513 35.9647 40.2606 33.609 37.6624C33.5156 37.5592 33.5237 37.3999 33.6274 37.307C33.73 37.2141 33.8893 37.2217 33.9822 37.3259C36.2787 39.8823 39.7515 42.7337 42.0592 43.1784C42.196 43.2049 42.2843 43.3377 42.2568 43.473C42.2328 43.5935 42.1281 43.6757 42.0107 43.6757C41.9852 43.6706 41.9698 43.6706 41.9545 43.6706L41.9617 43.6711Z"
            fill="#05408C"
          />
          <path
            d="M48.0987 41.5268C45.8839 41.0632 41.61 37.5782 38.4793 33.9149C38.3889 33.8087 38.4022 33.6505 38.5074 33.5611C38.6141 33.4702 38.7724 33.4835 38.8632 33.5892C41.9128 37.1978 46.2734 40.6701 48.1977 41.0336V41.0346C48.3345 41.0612 48.4218 41.1939 48.3953 41.3302C48.3713 41.4497 48.2656 41.5324 48.1492 41.5324C48.1237 41.5273 48.1084 41.5222 48.093 41.5222L48.0987 41.5268Z"
            fill="#05408C"
          />
          <path
            d="M53.353 38.2439C51.6907 37.5235 48.4879 34.9069 47.449 33.8741C46.9292 33.3533 45.7458 31.9789 44.6409 30.5897C43.532 29.1877 42.5277 27.8454 42.3255 27.2195C42.2847 27.0862 42.3603 26.9463 42.493 26.906C42.6258 26.8657 42.7662 26.9407 42.806 27.074C42.9188 27.4855 43.942 28.9145 45.0335 30.2762C46.1276 31.6511 47.3183 33.0311 47.8048 33.5182C48.7769 34.4964 52.0399 37.1406 53.5516 37.7813C53.6793 37.837 53.739 37.984 53.6834 38.1117C53.6435 38.2071 53.5496 38.2643 53.4531 38.2643C53.4122 38.2643 53.3816 38.2541 53.3459 38.2388L53.353 38.2439Z"
            fill="#05408C"
          />
          <path
            d="M56.268 33.4497C55.0228 32.2254 50.1694 27.1918 48.2206 25.0786C45.5382 24.7049 43.1661 23.282 41.4389 21.466C39.8455 19.7832 38.7825 17.7604 38.5727 15.831C38.3062 15.8764 37.9968 15.9183 37.6613 15.9576C37.0206 16.0306 36.3145 16.0837 35.7473 16.0837C35.5849 16.0822 35.4384 16.0796 35.3021 16.0704C34.9406 16.9562 34.2942 18.0054 33.5534 18.9745C32.6839 20.0936 31.7328 21.0825 30.8173 21.5022C30.2139 21.7682 29.492 21.9193 28.7634 21.9214C28.0895 21.9193 27.4048 21.7902 26.8161 21.4542C26.227 21.1229 25.7445 20.55 25.5755 19.7801L25.5632 19.726V19.6698C25.5688 18.9893 25.8114 18.2704 26.0707 17.5745C26.3326 16.8842 26.6221 16.2205 26.7462 15.7881C27.004 14.915 27.267 12.4097 27.3905 11.4606C27.4594 10.9506 27.6111 10.2705 28.0736 9.63181C28.5352 8.99106 29.3051 8.42179 30.4829 8.1078C32.5134 7.56304 35.4118 6.68437 36.9369 5.95938C37.8349 5.53715 38.7483 5.00465 40.0558 5.00414C40.9902 5.00414 42.0822 5.27422 43.4919 5.96245C46.6839 7.52372 52.688 9.46639 53.9266 9.69205L54.1283 9.73034L54.2457 9.89831C56.6392 13.3165 59.847 19.6657 61.8713 29.7022L61.928 29.9836L61.7146 30.1755C60.8022 30.9904 57.9942 32.907 56.8633 33.5329L56.535 33.7126L56.2593 33.4472L56.268 33.4497Z"
            fill="#05408C"
          />
          <path
            d="M61.8324 29.5237C62.0249 30.3441 62.4369 32.6386 61.8503 32.7432C61.2631 32.8479 60.3697 31.0992 60.579 30.7219C60.7883 30.3441 61.8298 29.5221 61.8298 29.5221L61.8324 29.5237Z"
            fill="#05408C"
          />
          <path
            d="M34.4213 42.3997C34.4341 42.4069 34.4504 42.4145 34.4637 42.4222C34.4494 42.414 34.4356 42.4069 34.4213 42.3987V42.4038V42.3997ZM57.769 33.5978C57.6056 33.3624 57.382 33.125 57.0721 32.8273C56.9016 32.931 56.7479 33.0213 56.6202 33.0913C55.3628 31.8547 50.3129 26.6149 48.4682 24.6038C48.216 24.5732 47.9684 24.5252 47.7213 24.4752C48.798 25.7056 49.7834 26.7972 50.4594 27.4736C52.1279 29.1416 55.1769 32.4219 56.2751 33.4574C56.6264 33.7861 56.8377 34.0174 56.9393 34.167C57.0399 34.3238 57.0389 34.3559 57.044 34.434C57.0461 34.5116 57.0129 34.6684 56.949 34.9191C56.8474 35.3423 56.7555 35.9417 56.3017 36.4809C55.8498 37.0077 55.0263 37.5306 53.2291 37.5969L52.7865 37.6117L52.7457 38.0523C52.6451 39.1184 52.4373 39.6611 52.2382 39.9685C52.0375 40.2748 51.8272 40.3973 51.5142 40.6352C51.2232 40.8578 50.6279 41.1596 49.5817 41.1601C49.137 41.1601 48.6107 41.1044 47.9944 40.962L47.5696 40.8645L47.4119 41.2709C47.2914 41.6063 46.8145 42.1485 46.0834 42.556C45.3533 42.971 44.3833 43.2774 43.2784 43.2768C42.8664 43.2768 42.437 43.2345 41.9913 43.14L41.6671 43.0721L41.4767 43.3417C41.1387 43.8313 40.3749 44.3939 39.5958 44.3817C39.4421 44.3807 39.2859 44.3623 39.124 44.3194C38.5502 44.1693 37.5628 43.8221 36.5442 43.3984L35.9075 43.9171C35.8304 43.9799 35.7432 44.0473 35.6553 44.1142C36.8781 44.6502 38.1213 45.0898 38.8662 45.292C39.1133 45.3574 39.3579 45.388 39.5963 45.388C40.6802 45.3773 41.5527 44.7993 42.0924 44.1836C42.4983 44.2515 42.895 44.2826 43.2789 44.2826C44.5701 44.2821 45.7051 43.9293 46.5817 43.4321C47.2837 43.0272 47.8264 42.5468 48.1522 42.0234C48.6786 42.1235 49.1544 42.1664 49.5823 42.1664C50.8249 42.1674 51.6546 41.7978 52.1279 41.4322C52.3602 41.2515 52.7579 41.0171 53.0821 40.5168C53.3624 40.0818 53.5758 39.486 53.6973 38.5787C55.4133 38.4465 56.4645 37.8532 57.0695 37.1303C57.7215 36.3593 57.8395 35.4929 57.9252 35.1621C57.9839 34.9196 58.0467 34.7046 58.0498 34.4345C58.0498 34.1384 57.9426 33.8372 57.7639 33.5819L57.769 33.5978ZM33.6249 6.48728C31.4703 6.37139 29.1626 6.28715 27.6917 6.24528C24.7468 6.1687 20.5689 6.2269 18.1351 5.27318L17.5883 5.06181L17.4627 5.63465C16.0327 12.1672 12.9658 19.3129 10.5187 24.5798L10.3706 24.8994L10.6192 25.147C12.0626 26.5899 13.5651 27.8101 14.985 28.8455C15.1872 28.5969 15.4215 28.3503 15.6875 28.1129C14.3494 27.1433 12.9402 26.0114 11.5801 24.6819C13.944 19.5672 16.8444 12.7788 18.321 6.39998C21.0703 7.25567 24.9276 7.16479 27.6631 7.24954C29.1258 7.29141 31.429 7.37565 33.5707 7.49053C33.7857 7.50176 33.9991 7.51401 34.2099 7.52575C35.0605 7.2475 35.8738 6.95801 36.5493 6.6767C35.6814 6.60011 34.6756 6.53885 33.6238 6.48269L33.6249 6.48728Z"
            fill="#05408C"
          />
          <path
            d="M0.428864 24.5814C0.426822 24.9205 0.142955 25.1931 0 25.4948C0.825567 25.8093 1.86301 26.2111 2.8831 26.6124C4.71191 27.3303 6.52796 28.0655 6.91394 28.26C7.24018 28.4239 7.57102 28.5056 7.88603 28.5056H7.88909C8.62225 28.5046 9.18642 28.0849 9.54738 27.6167L9.55555 27.606L9.56423 27.5937C13.737 21.5365 17.9138 7.49572 18.187 6.50167C18.2774 6.16113 18.3254 5.81038 18.3254 5.46678C18.3197 4.74485 18.1288 3.97494 17.4232 3.59662C17.2144 3.4945 16.7396 3.30713 16.0554 3.04266C14.026 2.26356 10.3689 0.925901 9.06848 0.49295C9.16651 7.10974 0.435503 24.147 0.43295 24.5707L0.428864 24.5814Z"
            fill="#05408C"
          />
          <path
            d="M61.9143 5.5939C65.8849 8.9702 71.1799 24.1403 71.9998 32.6273C71.0752 33.0112 70.097 33.3594 69.2745 33.485C68.765 33.5606 68.1559 33.5958 67.5187 33.5958C66.6993 33.5958 65.8344 33.5361 65.0844 33.4084C64.3313 33.2701 63.7105 33.1143 63.2663 32.7304C63.8524 32.6257 63.4807 30.2655 63.2882 29.4445C61.2639 19.408 58.0561 13.0587 55.6626 9.64056L55.5452 9.41744C55.7805 9.25407 56.0848 9.07742 56.4504 8.87677C56.9293 8.61384 57.4996 8.32486 58.077 8.04252C58.8071 7.69535 61.3395 5.85735 61.9215 5.59696L61.9143 5.5939Z"
            fill="#05408C"
          />
        </svg>
      ),
    },
    {
      id: 2,
      title: "Tim Profesional",
      icon: (
        <svg
          width="72"
          height="72"
          viewBox="0 0 72 72"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_125_73)">
            <path
              d="M36 33C39.9782 33 43.7936 34.5804 46.6066 37.3934C49.4196 40.2064 51 44.0217 51 48V66H21V48C21 44.0217 22.5804 40.2064 25.3934 37.3934C28.2064 34.5804 32.0218 33 36 33ZM15.864 42.018C15.3866 43.6284 15.1045 45.2903 15.024 46.968L15 48V66H6V52.5C5.99941 49.9127 6.95408 47.4163 8.6809 45.4896C10.4077 43.5629 12.7851 42.3416 15.357 42.06L15.864 42.018ZM56.136 42.018C58.8057 42.1807 61.3128 43.3559 63.1458 45.3037C64.9788 47.2515 65.9996 49.8253 66 52.5V66H57V48C57 45.921 56.7 43.914 56.136 42.018ZM16.5 24C18.4891 24 20.3968 24.7902 21.8033 26.1967C23.2098 27.6032 24 29.5109 24 31.5C24 33.4891 23.2098 35.3968 21.8033 36.8033C20.3968 38.2098 18.4891 39 16.5 39C14.5109 39 12.6032 38.2098 11.1967 36.8033C9.79018 35.3968 9 33.4891 9 31.5C9 29.5109 9.79018 27.6032 11.1967 26.1967C12.6032 24.7902 14.5109 24 16.5 24ZM55.5 24C57.4891 24 59.3968 24.7902 60.8033 26.1967C62.2098 27.6032 63 29.5109 63 31.5C63 33.4891 62.2098 35.3968 60.8033 36.8033C59.3968 38.2098 57.4891 39 55.5 39C53.5109 39 51.6032 38.2098 50.1967 36.8033C48.7902 35.3968 48 33.4891 48 31.5C48 29.5109 48.7902 27.6032 50.1967 26.1967C51.6032 24.7902 53.5109 24 55.5 24ZM36 6C39.1826 6 42.2348 7.26428 44.4853 9.51472C46.7357 11.7652 48 14.8174 48 18C48 21.1826 46.7357 24.2348 44.4853 26.4853C42.2348 28.7357 39.1826 30 36 30C32.8174 30 29.7652 28.7357 27.5147 26.4853C25.2643 24.2348 24 21.1826 24 18C24 14.8174 25.2643 11.7652 27.5147 9.51472C29.7652 7.26428 32.8174 6 36 6Z"
              fill="#05408C"
            />
          </g>
          <defs>
            <clipPath id="clip0_125_73">
              <rect width="72" height="72" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
    },
    {
      id: 3,
      title: "Pengerjaan Cepat",
      icon: (
        <svg
          width="38"
          height="72"
          viewBox="0 0 38 72"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M37.3396 27.1699H23.427L33.5454 0H5.72023L0.6604 39.3962H12.043L6.98459 72L37.3396 27.1699Z"
            fill="#05408C"
          />
        </svg>
      ),
    },
    {
      id: 4,
      title: "Gratis Konsultasi",
      icon: (
        <svg
          width="74"
          height="74"
          viewBox="0 0 74 74"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M58.9618 50.5513C57.1989 51.0786 55.4684 51.9944 53.7272 53.7272L53.7249 53.7293C51.4585 56.0131 50.5673 58.2817 50.1735 60.6237C49.786 62.9644 49.9776 65.3611 50.0185 67.6546C50.0227 68.0377 50.025 68.4209 50.0164 68.8007L68.8003 50.0143C68.204 50.0284 67.6036 50.0197 66.9966 50.0046C64.3557 49.9259 61.5985 49.7645 58.9618 50.5513Z"
            fill="#05408C"
            stroke="#05408C"
            stroke-width="0.5"
          />
          <path
            d="M37.001 1C17.1171 1 1 17.1163 1 36.9983C1 56.8826 17.1171 73 37.001 73C39.9777 73 42.8598 72.6147 45.6277 71.9324C45.9829 71.5396 46.2089 71.0543 46.3553 70.2707C46.5038 69.4496 46.5168 68.3551 46.4802 67.0915C46.42 64.5625 46.1703 61.3575 47.169 57.9609C47.8341 55.6988 49.0868 53.3741 51.2327 51.2357C51.2327 51.2357 51.2327 51.2346 51.235 51.2334C54.0396 48.4116 57.1713 47.1557 60.0533 46.694C62.9397 46.2258 65.5978 46.4669 67.7094 46.4926C69.115 46.5206 70.2599 46.4345 71.0026 46.1688C71.3942 46.0298 71.6763 45.8556 71.9324 45.622C72.6147 42.8573 73 39.974 73 36.9983C72.9997 17.1163 56.8826 1 37.001 1ZM23.2697 42.4548L18.1383 43.602C18.0608 43.6192 18.0307 43.6666 18.049 43.7463L19.2145 48.9551C19.2403 49.0714 19.178 49.1683 19.0617 49.1941L17.1493 49.6224C17.033 49.6481 16.9361 49.587 16.9104 49.4707L14.0283 36.5926C14.0026 36.4753 14.0649 36.3796 14.1812 36.3537L22.4926 34.494C22.6099 34.4681 22.7058 34.5285 22.7327 34.6458L23.1071 36.3236C23.134 36.4409 23.0728 36.5356 22.9554 36.5625L16.8685 37.9241C16.791 37.9412 16.7608 37.9896 16.7781 38.0682L17.5335 41.4433C17.5507 41.5207 17.598 41.551 17.6755 41.5335L22.8069 40.3863C22.9242 40.3594 23.0211 40.4209 23.0468 40.5371L23.4224 42.2149C23.4484 42.3322 23.387 42.4279 23.2697 42.4548ZM37.9877 44.9591L35.8224 45.4445C35.6663 45.4788 35.5749 45.4381 35.4866 45.3143L31.7931 40.7113L29.5094 41.2215C29.4319 41.2388 29.4016 41.2872 29.4189 41.3658L30.55 46.4186C30.5759 46.5359 30.5145 46.6317 30.3982 46.6576L28.4859 47.0858C28.3685 47.1117 28.2727 47.0503 28.247 46.934L25.3649 34.0561C25.339 33.9398 25.4005 33.8429 25.5177 33.8172L30.6491 32.6699C33.0878 32.1232 35.2456 33.3414 35.7686 35.6823C36.1571 37.4192 35.4628 38.9885 34.0681 39.8957L38.0683 44.6752C38.176 44.7944 38.1244 44.929 37.9877 44.9591ZM48.8746 42.5237L40.5631 44.3833C40.447 44.4092 40.3511 44.3489 40.3253 44.2316L37.4444 31.3535C37.4175 31.2363 37.4788 31.1416 37.5951 31.1157L45.9066 29.2561C46.0239 29.2292 46.1196 29.2905 46.1465 29.4067L46.521 31.0856C46.548 31.2018 46.4865 31.2966 46.3692 31.3234L40.2822 32.6847C40.2047 32.703 40.1746 32.7504 40.1918 32.829L40.9171 36.0674C40.9342 36.146 40.9816 36.1761 41.0591 36.1588L46.1905 35.0104C46.3078 34.9847 46.4036 35.0449 46.4304 35.1621L46.8049 36.84C46.8319 36.9572 46.7704 37.053 46.6532 37.0789L41.5218 38.2271C41.4443 38.2444 41.4142 38.2918 41.4314 38.3703L42.1826 41.7259C42.1997 41.8035 42.2471 41.8348 42.3246 41.8175L48.4115 40.4549C48.5288 40.4291 48.6257 40.4894 48.6516 40.6067L49.0272 42.2845C49.0532 42.4011 48.9919 42.4978 48.8746 42.5237ZM59.997 40.0354L51.6855 41.8951C51.5683 41.921 51.4725 41.8606 51.4466 41.7434L48.5657 28.8653C48.5388 28.748 48.6001 28.6532 48.7174 28.6264L57.0289 26.7678C57.1461 26.741 57.2409 26.8012 57.2678 26.9184L57.6423 28.5963C57.6691 28.7135 57.6088 28.8083 57.4917 28.8352L51.4046 30.1965C51.3261 30.2138 51.2959 30.2621 51.3132 30.3407L52.0385 33.5791C52.0557 33.6577 52.1031 33.6878 52.1817 33.6705L57.3131 32.5221C57.4303 32.4953 57.5251 32.5566 57.552 32.6739L57.9265 34.3507C57.9533 34.4691 57.893 34.5638 57.7757 34.5906L52.6445 35.739C52.5659 35.7563 52.5358 35.8037 52.5531 35.881L53.3043 39.2367C53.3214 39.3151 53.369 39.3465 53.4474 39.3281L59.5344 37.9667C59.6516 37.9408 59.7476 38.0011 59.7733 38.1184L60.1489 39.7962C60.1748 39.9127 60.1144 40.0096 59.997 40.0354Z"
            fill="#05408C"
            stroke="#05408C"
            stroke-width="0.5"
          />
          <path
            d="M31.0333 34.7545L28.2039 35.3884C28.1264 35.4056 28.0963 35.453 28.1136 35.5316L28.9035 39.0627C28.9218 39.1412 28.9692 39.1703 29.0467 39.153L31.876 38.5202C33.0868 38.25 33.74 37.3256 33.486 36.1934C33.2287 35.0418 32.2439 34.4843 31.0333 34.7545Z"
            fill="#05408C"
            stroke="#05408C"
            stroke-width="0.5"
          />
        </svg>
      ),
    },
    {
      id: 5,
      title: "Bebas Revisi",
      icon: (
        <svg
          width="73"
          height="72"
          viewBox="0 0 73 72"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M64.0815 8.41873C67.3062 11.6437 67.3062 16.8725 64.0815 20.0974L62.5947 21.5841C62.1618 21.4904 61.6167 21.3477 60.9954 21.1321C59.3325 20.5552 57.147 19.4648 55.0911 17.409C53.0352 15.3532 51.945 13.1677 51.3681 11.5047C51.1524 10.8834 51.0099 10.3383 50.916 9.90538L52.4028 8.41873C55.6278 5.19376 60.8565 5.19376 64.0815 8.41873Z"
            fill="#05408C"
          />
          <path
            d="M44.2403 39.9384C43.0283 41.1504 42.4223 41.7564 41.7539 42.2778C40.9658 42.8925 40.1129 43.4196 39.2105 43.8498C38.4455 44.2143 37.6325 44.4852 36.0062 45.0273L27.4313 47.8857C26.6311 48.1524 25.7488 47.9442 25.1523 47.3478C24.5559 46.7511 24.3476 45.8691 24.6143 45.0687L27.4727 36.4938C28.0147 34.8675 28.2857 34.0545 28.6503 33.2895C29.0804 32.3871 29.6075 31.5342 30.2223 30.7461C30.7436 30.0777 31.3496 29.4719 32.5616 28.2598L47.3099 13.5116C48.101 15.5942 49.4879 18.1699 51.9089 20.591C54.3302 23.0121 56.906 24.3989 58.9886 25.1903L44.2403 39.9384Z"
            fill="#05408C"
          />
          <path
            d="M62.1065 61.6065C66.5 57.2133 66.5 50.142 66.5 36C66.5 31.3551 66.5 27.4732 66.3443 24.1983L47.258 43.2849C46.2041 44.3391 45.4124 45.1311 44.5214 45.8259C43.4756 46.6419 42.344 47.3412 41.1464 47.9118C40.1264 48.3981 39.0638 48.7518 37.6499 49.2228L28.8543 52.1547C26.437 52.9605 23.772 52.3314 21.9703 50.5296C20.1686 48.7281 19.5395 46.0629 20.3453 43.6458L23.277 34.8501C23.7481 33.4362 24.102 32.3736 24.588 31.3536C25.1587 30.156 25.8582 29.0244 26.674 27.9784C27.3689 27.0875 28.161 26.2958 29.2152 25.2421L48.3017 6.15564C45.0269 6 41.1449 6 36.5 6C22.3578 6 15.2868 6 10.8934 10.3934C6.5 14.7868 6.5 21.8578 6.5 36C6.5 50.142 6.5 57.2133 10.8934 61.6065C15.2868 66 22.3578 66 36.5 66C50.642 66 57.7133 66 62.1065 61.6065Z"
            fill="#05408C"
          />
        </svg>
      ),
    },
    {
      id: 6,
      title: "Pelayanan Ramah",
      icon: (
        <svg
          width="73"
          height="72"
          viewBox="0 0 73 72"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10.8934 10.3934C6.5 14.7868 6.5 21.8578 6.5 36C6.5 50.142 6.5 57.2133 10.8934 61.6065C15.2868 66 22.3578 66 36.5 66C50.642 66 57.7133 66 62.1065 61.6065C66.5 57.2133 66.5 50.142 66.5 36C66.5 21.8578 66.5 14.7868 62.1065 10.3934C57.7133 6 50.642 6 36.5 6C22.3578 6 15.2868 6 10.8934 10.3934ZM45.5 36C47.1569 36 48.5 33.9852 48.5 31.5C48.5 29.0147 47.1569 27 45.5 27C43.8431 27 42.5 29.0147 42.5 31.5C42.5 33.9852 43.8431 36 45.5 36ZM30.5 31.5C30.5 33.9852 29.1568 36 27.5 36C25.8432 36 24.5 33.9852 24.5 31.5C24.5 29.0147 25.8432 27 27.5 27C29.1568 27 30.5 29.0147 30.5 31.5ZM25.6924 46.6602C26.4324 45.6618 27.8415 45.4524 28.8398 46.1925C31.025 47.8119 33.6623 48.75 36.5 48.75C39.3377 48.75 41.975 47.8119 44.1602 46.1925C45.1586 45.4524 46.5677 45.6618 47.3075 46.6602C48.0476 47.6586 47.8382 49.0677 46.8398 49.8075C43.9226 51.9699 40.355 53.25 36.5 53.25C32.645 53.25 29.0774 51.9699 26.1602 49.8075C25.1619 49.0677 24.9525 47.6586 25.6924 46.6602Z"
            fill="#05408C"
          />
        </svg>
      ),
    },
  ];

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  // Auto scroll every 3 seconds (adjust as needed)
  useEffect(() => {
    const intervalId = setInterval(handleNext, 3000);

    return () => clearInterval(intervalId);
  }, [activeIndex]);
  return (
    <div
      id="home"
      className="mt-24 md:mt-[170px] w-full mx-auto flex items-center justify-center"
      style={{ backgroundImage: "url('/bg.png')" }}
    >
      <div className="mx-5 md:mx-20 text-center flex flex-col items-center mt-2 w-full">
        <div className="px-4 py-2 rounded-full md:px-4 md:py-3 border-2 border-secondary bg-orange w-fit">
          <p className="text-xs font-medium md:text-sm text-secondary">
            JASA PROPOSAL PROFESIONAL
          </p>
        </div>
        <div className="items-center mt-2 max-w-5xl">
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-baseBlack">
            Realisasikan Tujuanmu Bersama
            <span className="text-primary"> PROPOSAL</span>
            <span className="text-secondary"> STUDIO</span>
          </h1>
        </div>
        <div className="mt-[14px] max-w-4xl">
          <p className="text-sm md:text-xl font-medium text-baseBlack">
            &ldquo;Percayakan kesuksesan proposal Anda kepada kami. Tim
            profesional dan berpengalaman dari kami akan membantu Anda meraih
            kesuksesan yang lebih besar&rdquo;
          </p>
        </div>
        <div className="mt-10">
          <Link
            href={`https://wa.me/6281226831649?text=${encodeURIComponent(
              "Hallo Kak, saya ingin tanya terkait proposal, apakah bisa dibantu?"
            )}`}
          >
            <button className="bg-primary hover:bg-primary/50 focus:ring-4 focus:ring-blue-300 ease-in duration-200 rounded-full flex py-4 px-6 md:py-5 md:px-8 gap-2">
              <Icon name="whatsapp" />
              <p className="font-medium text-base md:text-lg text-white">
                Konsultasi Gratis
              </p>
            </button>
          </Link>
        </div>

        {/* Keunggulan kami */}
        <div className="bg-primary/70 mb-[100px] max-w-full rounded-[20px] mt-[60px] p-[60px] hidden lg:block">
          <h2 className="text-white text-4xl font-semibold">
            Keunggulan Memilih Layanan Kami
          </h2>
          <div className="flex mt-10 justify-center items-center">
            {items.map((data) => {
              return (
                <div
                  key={data.id}
                  className="p-[10px] items-center flex-col justify-center flex"
                >
                  <div className="rounded-full bg-white p-5 gap-2 overflow-hidden w-[108px] h-[108px] items-center flex justify-center">
                    {data.icon}
                  </div>
                  <h2 className="font-medium text-2xl text-white justify-center items-center mt-[10px]">
                    {data.title}
                  </h2>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile version */}
        <div className="bg-primary/70 my-14 w-full rounded-xl block lg:hidden">
          <h2 className="text-lg md:text-2xl font-semibold text-white px-14 py-3 mt -5">
            Keunggulan Memilih Layanan Kami
          </h2>
          <div className="mt-10 mb-10">
            <div className="px-8 items-center flex-col justify-center flex">
              <div className="rounded-full bg-white p-5 gap-2 overflow-hidden w-[108px] h-[108px] items-center flex justify-center">
                {items[activeIndex].icon}
              </div>
              <h2 className="font-medium text-2xl md:text-4xl text-white justify-center items-center mt-[10px]">
                {items[activeIndex].title}
              </h2>
            </div>
            <div className="justify-center flex gap-2 mt-10">
              {[...Array(items.length)].map((_, index) => (
                <Icon
                  key={index}
                  name={
                    index === activeIndex ? "circle-active" : "circle-nonActive"
                  }
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}