function s(i,e){const t=i.toString();if(!t)return"아무것도 입력되지 않았습니다.";const n=/^[0-9]+$/,r=t.split(".");return n.test(r[0])?Number(r[0]).toLocaleString():"숫자가 아닙니다."}export{s as p};
