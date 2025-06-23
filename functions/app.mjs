export const handler = async (event) => {
    const isSuccess = Math.random() >= 0.5;
    if (isSuccess) {
        return {
            statusCode: 200,
            body: JSON.stringify({ message: "All good!" }),
        };
    } 
    return {
        statusCode: 500,
        body: JSON.stringify({ message: "Internal Server Error!" }),
    };
}