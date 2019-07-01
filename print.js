/**
 *  数据处理 二位数组
 * @Author   TaiMie
 * @DateTime 2019-03-07T17:41:05+0800
 * @version                           1.0
 * @param    {[type]}                 data [description]
 * @return   {[type]}                      [description]
 */
// const eachDate = data => {
//     let newdata = [[data[0]]];
//     for (let i = 1; i < data.length; i++) {
//         let index;
//         for (let y = 0; y < newdata.length; y++) {
//             if (data[i].subjectId == newdata[y][0].subjectId) {
//                 index = y;
//             }
//         }
//         if (index != undefined) {
//             newdata[index].push(data[i]);
//         } else {
//             newdata.push([data[i]]);
//         }
//     }
//     return newdata;
// };

/**
 * [description] 渲染打印医嘱 受试者信息
 * @Author   TaiMie
 * @DateTime 2019-03-12T20:51:31+0800
 * @version                           1.0
 * @param    {[type]}                 iteminfo [description]
 * @return   {[type]}                          [description]
 */
// const renderSubjectInfo = iteminfo => {
//     let genders = {M: '男', F: '女'};
//     let type = ['长期', '临时', '历史'];
//     let projectInfo = JSON.parse(sessionStorage.getItem('trial_projectInfo'));
//     return `<div>
//             <h3>${type[iteminfo.type]}医嘱单</h3>
//             <label>方案编号</label>
//             <span>${projectInfo.programCode}</span>
//             <label>受试者</label>
//              <span>${iteminfo.subjectName}</span>
//             <label>性别</label>
//             <span>${genders[iteminfo.gender]}</span>
//             <label>年龄</label>
//              <span>${iteminfo.age}</span>
//             <label>筛选号</label>
//              <span>${iteminfo.screenNumber || ''}</span>
//             <label>入组号</label>
//             <span>${iteminfo.entryNumber || ''}</span>
//         </div>`;
// };
/**
 * 模版渲染
 * @Author   TaiMie
 * @DateTime 2019-03-07T17:41:32+0800
 * @version                           1.0
 * @param    {[type]}                 newItems [description]
 * @return   {[type]}                          [description]
 */
// const renderTemplate = newItems => {
//     let type = ['长期', '临时', '历史'];
//     let htmnl = `<!DOCTYPE html><html><head><title>${sessionStorage.getItem('etiral_siteName')}</title>
//                         <style type="text/css">
//                             table{border-top:1px solid #ddd;border-left:1px solid #ddd;border-collapse: collapse;font-size:10px;width:100%;}
//                             tr>th,tr>td{border-bottom:1px solid #ddd;border-right:1px solid #ddd;padding:4px 8px;}
//                             tr>th{background: #fafafa; }
//                             .printover{  max-width:200px;}
//                               .printover p{ width:100%;word-break: break-all;}
//                               div{margin-bottom:4px;}
//                               h3{text-align:center}
//                               label{font-size:10px; margin-right:4px;}
//                               span{ font-size:10px;margin-right:20px; border-bottom: 1px solid #000; display:inline-block;padding:0 8px;}
//                         </style></head><body>
//                         `;
//     newItems.map(items => {
//         htmnl += renderSubjectInfo(items[0]);
//         htmnl +=
//             '<table style="page-break-after:always"><tbody><tr><th>开始时间</th><th>类型</th><th >医嘱内容</th><th>剂量</th><th>用法</th><th>频次</th><th>备注</th><th>开嘱人</th><th>执行人</th></tr>';
//         items.map(item => {
//             htmnl += `<tr>
//                             <td> ${item.printBeginTime || ''}</td>
//                              <td>${type[item.type] || ''}</td>
//                              <td class="printover"><p>${item.contentName || ''}</p></td>
//                              <td>${item.dosage || ''} ${item.dosageUnit ? (item.dosageUnit == '1' ? '片' : 'ml') : ''}</td>
//                              <td>${item.adviceUsageName || ''}</td>
//                              <td>${item.frequencyName || ''}</td>
//                              <td>${item.comment || ''}</td>
//                              <td>${item.testator || ''}</td>
//                              <td>${item.executorName || ''}</td></tr>`;
//         });
//         htmnl += '</tr></tbody></table>';
//     });
//     htmnl += '</body></html>';
//     return htmnl;
// };

function renderTemplate() {
    let htmnl = `<!DOCTYPE html><html><head><title>${sessionStorage.getItem('etiral_siteName')}</title>
                        <style type="text/css">
                              label{font-size:4px; margin-right:4px;}
                              span{ font-size:4px;margin-right:20px; display:inline-block;padding:0 8px;}
                        </style></head><body>
                        `;
    htmnl += `<div>
            <label>李波</label>
        </div>`;
    htmnl += '</body></html>';
    return htmnl;
}

/**
 * [打印医嘱信息]
 * @Author   TaiMie
 * @DateTime 2019-03-04T16:22:16+0800
 * @version                           1.0
 * @param    {[type]}                 data [description]
 * @return   {[type]}                      [description]
 */
const printTable = () => {
    let newWin = window.open(''); //新打开一个空窗口
    // let newItems = eachDate(data);
    let html = renderTemplate();
    newWin.document.write(html); //将表格添加进新的窗口
    newWin.document.close(); //在IE浏览器中使用必须添加这一句
    newWin.focus(); //在IE浏览器中使用必须添加这一句
    let hkey_key;
    let hkey_root = 'HKEY_CURRENT_USER';
    let hkey_path = '\\Software\\Microsoft\\Internet Explorer\\PageSetup\\';
    try {
        /* eslint-disable */
        let RegWsh = new ActiveXObject('WScript.Shell');
        hkey_key = 'header';
        RegWsh.RegWrite(hkey_root + hkey_path + hkey_key, '');
        hkey_key = 'footer';
        RegWsh.RegWrite(hkey_root + hkey_path + hkey_key, '');
    } catch (e) {}
    newWin.print(); //打印
    newWin.close(); //关闭窗口
};
