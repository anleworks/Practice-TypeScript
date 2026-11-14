export {};
console.log("Enum and Literal Type");

type TRole = string | number;

// literal type
type TSuperRole = "USER" | "SUPERADMIN" | "ADMIN";

const user: TRole = "USER";
const admin: TRole = "ADMIN";
const superAdmin: TRole = 1;

const otherUser: TSuperRole = "ADMIN";

// Enum
enum RoleEnum {
  USER,
  ADMIN,
  SUPERADMIN,
}

const myRole: RoleEnum = RoleEnum.ADMIN;
