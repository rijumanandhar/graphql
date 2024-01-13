export class Company{
    id: number;
    name: string;
    phone: string;
    email: string;
    logo: string;
};

export const CompanyColumns = ["name","phoneNumber", "email", "logo"]

export const CompanyData: Company[] = [
    {
        id: 1,
        name: "Company 1",
        phone: "12345",
        email:"Company12345@company.com",
        logo:"Company12345",
    },
    {
        id: 2,
        name: "Company 2",
        phone: "23456",
        email:"Company23456@company.com",
        logo:"Company23456",
    },
    {
        id: 3,
        name: "Company 3",
        phone: "34567",
        email:"Company34567@company.com",
        logo:"Company34567",
    },
    {
        id: 4,
        name: "Company 4",
        phone: "45678",
        email:"Company34567@company.com",
        logo:"Company34567",
    },
    {
        id: 5,
        name: "Company 5",
        phone: "56789",
        email:"Company56789@company.com",
        logo:"Company56789",
    },
];