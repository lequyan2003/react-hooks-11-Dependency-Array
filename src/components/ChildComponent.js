import React, { useEffect, useMemo, useState } from 'react'

function ChildComponent({ temp }) {
    const [userId, setUserId] = useState(3);
    const [serviceName, setServiceName] = useState('users');
    const [data, setData] = useState();

    // const temp = [1,2,3,4,5];
    // const temp = useMemo(() => { return [1,2,3,4,5] }, []);
    // const [temp] = useState([1,2,3,4,5]);

    const requestInfo = {
        userId: 3,
        serviceName: 'users'
    };

    useEffect(() => {
        console.log('useEffect from Child');
        fetch(`https://reqres.in/api/${requestInfo.serviceName}/${requestInfo.userId}`)
            .then((res) => res.json())
            .then((res) => {
                setData(res.data);
            })

        // temp.forEach(item => console.log({ item }));
    // }, [userId, serviceName, temp]);  // Nếu có sự thay đổi trong dependency array thì sẽ thực thi lại useEffect
    // }, [JSON.stringify(temp)]); // ===> nên dùng useState hoặc useMemo hoặc React.Memo()
    }, [JSON.stringify(requestInfo)]);
  return (
    <div>
      <p>Child Component</p>
      <button onClick={() => setUserId(6)}>Update user id to 6</button>
      Data: {JSON.stringify(data)}
    </div>
  );
}

export default ChildComponent;