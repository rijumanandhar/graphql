export class Company{
    id!: number;
    companyName!: string;
    phoneNumber!: string;
    email!: string;
    companyLogo!: string;
};

export const CompanyColumns = ["name","phoneNumber", "email", "logo"]

export const CompanyData: Company[] = [
    {
        id: 1,
        companyName: "Company 1",
        phoneNumber: "12345",
        email:"Company12345@company.com",
        companyLogo:"Company12345",
    },
    {
        id: 2,
        companyName: "Company 2",
        phoneNumber: "23456",
        email:"Company23456@company.com",
        companyLogo:"Company23456",
    },
    {
        id: 3,
        companyName: "Company 3",
        phoneNumber: "34567",
        email:"Company34567@company.com",
        companyLogo:"Company34567",
    },
    {
        id: 4,
        companyName: "Company 4",
        phoneNumber: "45678",
        email:"Company34567@company.com",
        companyLogo:"Company34567",
    },
    {
        id: 5,
        companyName: "Company 5",
        phoneNumber: "56789",
        email:"Company56789@company.com",
        companyLogo:"Company56789",
    },
];