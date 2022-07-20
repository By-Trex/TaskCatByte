import request from './request';


class Staffs {
    static getStaff = async (params) => {
        return await request.get('users', params);
    };

    static deleteStaff = async (id, data) => {
        return await request.delete('users' + id, data);
    };

}

export {Staffs};
