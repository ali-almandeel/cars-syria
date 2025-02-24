type BaseType = {
    path: string;
    page: React.ReactNode  
}

export type ProtectedRoutesConfig = BaseType & {
    isProtected: true;
}

export type UnprotectedRoutesConfig = BaseType & {
    isProtected: false;
}


export type RoutesConfig = ProtectedRoutesConfig | UnprotectedRoutesConfig