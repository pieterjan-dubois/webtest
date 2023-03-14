import {User} from "../domain/model/user";

function mapUserToDomain(user: User): User {
    return {
        password: user.password,
        id: user.id,
        name: user.name,
        lastname: user.lastname,
        address: user.address,
        email: user.email,
        loans: user.loans.map((loan) => mapLoan(loan))
    };
}