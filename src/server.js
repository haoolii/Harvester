import { connect } from './utils/db';

export const start = async () => {
    try {
        await connect();
    } catch (e) {
        console.error(e);
    }
}