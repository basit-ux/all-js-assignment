var customerName = prompt('Enter customer Name')
var juice = +prompt('Enter juice price')
var nimca = +prompt('Enter nimca price')
var bag = +prompt('Enter bag price')
var tea = +prompt('Enter tea price')
var cofee = +prompt('Enter cofee price')
var total = juice + nimca + bag + tea + cofee
var discount = total / 500 * 100
var  shooping;

if (discount >= 80) {
    shooping = "THNKS FOR THE SHOOPING"
}
else if (discount >= 70) {
    shooping = 'THNKS FOR THE SHOOPING'
}
else if (discount >= 60) {
    shooping = 'THNKS FOR THE SHOOPING'
}
else if (discount >= 50) {
    shooping = 'THNKS FOR THE SHOOPING'
}
else if (discount >= 40) {
    shooping = 'THNKS FOR THE SHOOPING'
}
else {
    shooping = 'THNKS FOR THE SHOOPING'
}


document.write(
    `<table align='center' width='70%' border='1px'> 
    <tr>
        <th> CUSTOMER </th>
        <th> JUICE </th>
        <th> NIMCA </th>
        <th> BAG </th>
        <th> TEA </th>
        <th> COFEE </th>
        <th> TOTAL </th>
        <th> DISCOUNT </th>
        <th>  SHOOPING </th>
    </tr>

    <tr>
        <td> ${customerName} </td>
        <td> ${juice} </td>
        <td> ${nimca} </td>
        <td> ${bag} </td>
        <td> ${tea} </td>
        <td> ${cofee} </td>
        <td> ${total} </td>
        <td> ${discount.toFixed(2)} </td>
        <td> ${ shooping} </td>

        </tr>
    </table>
    `
)
