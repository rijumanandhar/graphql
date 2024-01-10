export class User{
    id!: number;
    username!: string;
    fullname!: string;
    email!: string;
    photo!: string;
    phone!: string;
    companyId!: number;
};

export const UserColumns = ["username","fullname", "email", "photo", "phone", "companyId"]

export const UserData: User[] = [
    {
        id: 1,
        username: "johnsnow12345",
        fullname: "John Snow",
        email:"johnsnow@company2.com",
        photo:"johnsnow12345.jpg",
        phone:"12345",
        companyId:2,
    },
    {
        id: 2,
        username: "aryastark12345",
        fullname: "Arya Stark",
        email:"aryastark@company2.com",
        photo:"aryastark12345.jpg",
        phone:"123456",
        companyId:2,
    },
    {
        id: 3,
        username: "cerseiBarathion12345",
        fullname: "Cersei Barathion",
        email:"cerseiBarathion@company2.com",
        photo:"cerseiBarathion12345.jpg",
        phone:"1234567",
        companyId:2,
    },
    {
        id: 4,
        username: "tyrionLannister12345",
        fullname: "Tyrion Lannister",
        email:"tyrionLannister@company2.com",
        photo:"tyrionLannister12345.jpg",
        phone:"12345678",
        companyId:2,
    },
    {
        id: 5,
        username: "aegontargarean12345",
        fullname: "Aegon Targarean",
        email:"aegontargarean@company2.com",
        photo:"jaegontargarean.jpg",
        phone:"123456789",
        companyId:2,
    },
   
];