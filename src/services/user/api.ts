export async function loadUserMock(id: number) {
  return new Promise<API.UserDetail>((resolve) => {
    if (id === 1) {
      resolve({
        id: 1,
        chnName: "超级管理员",
        mobilePhoneNumber: "10000",
        emailAddress: "10000@qq.com",
        isLockFlag: true,
        createUser: {
          id: 1,
          chnName: "超级管理员",
        },
        createTime: "2023-09-01 12:00:00",
        latestUpdateUser: {
          id: 1,
          chnName: "超级管理员"
        },
        latestUpdateTime: "2023-09-01 12:00:00",
      })
    } else {
      resolve({
        id: 2,
        chnName: "丁时辰",
        mobilePhoneNumber: "17705505750",
        isLockFlag: true,
        createUser: {
          id: 1,
          chnName: "超级管理员",
        },
        createTime: "2023-09-01 12:00:00",
        latestUpdateUser: {
          id: 1,
          chnName: "超级管理员"
        },
        latestUpdateTime: "2023-09-01 12:00:00",
      })
    }
  })
}
