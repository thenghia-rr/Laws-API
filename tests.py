# from datetime import datetime

# # Chuỗi datetime nhận được từ cơ sở dữ liệu hoặc từ một nguồn khác
# enacted_date_str = "2015-11-27T00:00:00.000+00:00"

# # Chuyển đổi chuỗi datetime thành đối tượng datetime
# enacted_date = datetime.fromisoformat(enacted_date_str)

# # Định dạng lại đối tượng datetime thành chuỗi theo định dạng dd/mm/yyyy
# enacted_date_formatted = enacted_date.strftime("%d/%m/%Y")

# print(enacted_date_formatted)  # In ra: 27/11/2015
# -------------------------------------------------------------------------

import requests 

url = 'http://localhost:4000/api/law'
res = requests.get(url)

data = res.json()
laws = data["data"]

cnt = 0
hs = 0
ds = 0
ld = 0
thue = 0
dn = 0
hc = 0
for i, law in enumerate(laws):
    if law['category'] == "Hình sự":
        hs += 1
    if law['category'] == "Dân sự":
        ds += 1
    if law['category'] == "Lao động":
        ld += 1
    if law['category'] == "Thuế":
        thue += 1
    if law['category'] == "Doanh nghiệp":
        dn += 1
    if law['category'] == "Hành chính":
        hc += 1

    cnt += 1

    # print(f"------------LAW {i + 1}------------")
    # print("Tên luật:", law["name"])
    # print("Mô tả:")
    # for desc in law["desc"]:
    #     print("-", desc)
    # print("Danh mục:", law["category"])
    # print("Ngày ban hành:", law["enactedDate"])
    # print("Ngày có hiệu lực:", law["effectiveDate"])
    # print("---------------------------------------")
print(f'Sum: {cnt}')
print(f'Hinh su: {hs}')
print(f'Dan su: {ds}')
print(f'Lao dong: {ld}')
print(f'Thue: {thue}')
print(f'Doanh nghiep: {dn}')
print(f'Hanh chinh: {hc}')