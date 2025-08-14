var password = "1234";
var oldPassword = prompt("Enter cafe password: ");
if(oldPassword === password){
    var bill = 0, items = 0;
    let choice;

    do{

        console.log("Welcome to the cafe...select your order...");
        console.log("1. Coffee.........price:- 50rs.");
        console.log("2. Tea............price:- 30rs.");
        console.log("3. Sandwich.......price:- 80rs.");
        console.log("4. Pastry.........price:- 100rs.");
        console.log("5. View Bill.");
        console.log("6. Change cafe password.");
        console.log("0. Exit.");
        choice = parseInt(prompt("Select your choice : "));

        if(choice == 1){
            console.log("You have ordered coffee...price: - 50rs.");
            bill += 50;
            console.log(`Your current bill is : ${bill}`);
            items++;
        }else if(choice == 2){
            console.log("You have ordered Tea...price: - 30rs.");
            bill += 30;
            items++;
            console.log(`Your current bill is : ${bill}`);
        }else if(choice == 3){
            console.log("You have ordered Sandwich...price: - 80rs.");
            bill += 80;
            items++;
            console.log(`Your current bill is : ${bill}`);
        }else if(choice == 4){
            console.log("You have ordered Pastry...price: - 100rs.");
            bill += 100;
            items++;
            console.log(`Your current bill is : ${bill}`);
        }else if(choice == 5){
            console.log(`You have ordered ${items}items.`)
            console.log(`Subtotal : ${bill}rs.`);
            let finalBill = bill;
            let GST = 5;
            let discount = 2;
            console.log(`GST(5%) : ${(bill * GST) / 100}rs.`);
            finalBill += (finalBill * GST) / 100;
            if(bill >= 500 && bill < 1000){
                discount = 10;
            }
            if(bill >= 1000){
                discount = 20;
            }
            console.log(`Discount : ${(bill * discount) / 100}`)
            finalBill -= (finalBill * discount) / 100;
            console.log(`Final bill amount : ${finalBill}`);
        }else if(choice == 6){
            var newPassword = prompt("Enter new password: ");
            var cPassword = prompt("Enter confirm new password: ");

            if(newPassword === cPassword){
                password = newPassword;
                alert("Password changed successfully....");
            }else{
                alert("New password and confirm password does not match...");
            }
        }

    }while(choice != 0);
}else{
    alert("Wrong password entered.");
}
