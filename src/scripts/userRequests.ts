

export const registerNewUser = async (values: any) => {
    try {
        const response = await fetch('http://127.0.0.1:8000/user/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(values),
        });

        const data = await response.json();
        return { status: response.status, message: data.message };
    } catch (error) {
        return { status: 500, message: 'An unexpected error occurred.' };
    }
};