export interface loginDTO {
    email: string;
    password: String;
}

export interface tokenDTO {
    accessToken: string
    expiresIn: number
}