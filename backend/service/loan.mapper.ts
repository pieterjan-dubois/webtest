import {Loan} from "../domain/model/loan";

function mapLoanToDomain(loan: any): Loan {
    return {
        user: mapUser(loan.user),
        id: loan.id,
        title: loan.title,
        author: loan.author,
        begindate: loan.begindate,
        enddate: loan.enddate
    };
}