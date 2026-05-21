// LOAD ĐƠN
const API_RES = "https://69f9a6d9c509a40d3aa2efdc.mockapi.io/api/v1/reservations";

function load(){
    fetch(API_RES)
    .then(res=>res.json())
    .then(data=>{
        renderOrders(data);
    })
    .catch(()=> alert("Lỗi tải đơn"));
}

// HIỂN THỊ ĐƠN
function renderOrders(orders){
    let html = "";

    orders.forEach(o=>{
        let items = "";

        if(o.items){
            items = o.items.map(i => `${i.name} x${i.qty}`).join(", ");
        }

        html += `
        <tr>
            <td>${o.name}</td>
            <td>${o.phone}</td>
            <td>${o.tableId}</td>
            <td>${items}</td>
            <td>
                <span class="badge ${
                    o.status === "done" ? "bg-success" :
                    o.status === "cancel" ? "bg-danger" :
                    "bg-warning"
                }">
                    ${o.status}
                </span>
            </td>
            <td>
                <button onclick="update('${o.id}','done')" 
                    class="btn btn-sm btn-success">✔</button>

                <button onclick="update('${o.id}','cancel')" 
                    class="btn btn-sm btn-danger">✖</button>
            </td>
        </tr>`;
    });

    document.getElementById("list").innerHTML = html;
}

// UPDATE TRẠNG THÁI
function update(id, status){
    fetch(API_RES + "/" + id,{
        method:"PUT",
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify({status: status})
    })
    .then(res=>{
        if(!res.ok) throw new Error();
        load();
    })
    .catch(()=> alert("Lỗi cập nhật!"));
}