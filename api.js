/**
 * 大灣高中國中部社團管理系統
 * API 設定
 */

const API_URL =
"https://script.google.com/macros/s/AKfycbyuxweI-rTTRWztfnBkSNfX4iy8saap6tij5XmSuNf39yBlNvQnuw5ePd2nW6eZbL90gw/exec";

/**
 * 學生登入
 */
async function studentLogin(studentNo){

    const url =
        API_URL +
        "?action=login&studentNo=" +
        encodeURIComponent(studentNo);

    const response = await fetch(url);

    return await response.json();

}
