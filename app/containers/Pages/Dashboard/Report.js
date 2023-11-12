import { Card, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { hostBackend } from '../../../../env';

function Report() {
  const [topic, Settopic] = useState('');
  useEffect(() => {
    axios.post(`${hostBackend}/api/Read_report`).then((data) => {
      console.log(data.data);
      Settopic(data.data);
    });
  }, []);
  return (
    <div>
      {Object.values(topic).map((data) => (
        <Card
          key={data.graduate_report_id}
          sx={{
            width: '100%',
            height: '150px',
            border: '2px solid #000',
            marginBottom: '2%',
            padding: '2%',
            overflowY: 'scroll',
          }}>
          <Typography>ชื่อสถานประกอบการ : {data.name_cooperative}</Typography>
          <Typography>เบอร์โทรติดต่อ : {data.phone_cooperative}</Typography>
          <Typography>เรื่องที่ต้องการรายการ : {data.topic_gradute}</Typography>
          <Typography>รายละเอียด : {data.contant_gradute}</Typography>
          <Typography>
            {data.prefix_name_graduate} {data.first_name_graduate}{' '}
            {data.last_name_graduate}
          </Typography>
          {/* <Typography variant='h3'>Report student {item}</Typography> */}
        </Card>
      ))}
    </div>
  );
}

export default Report;
