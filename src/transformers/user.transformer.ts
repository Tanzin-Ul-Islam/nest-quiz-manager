export function UserTransformer(arg:any){
    const {password, updatedAt, ...transfromedData} = arg;
    return transfromedData;
}