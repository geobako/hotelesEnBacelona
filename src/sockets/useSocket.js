import {useEffect, useRef} from 'react';
import {SOCKET_URL} from 'config/constants';

import {useDispatch, useSelector} from 'react-redux';
import {selectUserName} from 'store/reviews/selectors';

let ws = null;

const useSockets = () => {
  const username = useSelector(selectUserName);

  const dispatch = useDispatch();

  useEffect(() => {
    if (username && !ws) {
      ws = new WebSocket(`${SOCKET_URL}?username=${username}`);

      ws.onopen = () => {
        console.log('Connected');
      };
      ws.onclose = e => {
        console.log('Closed', e);
      };
      ws.onerror = e => {
        console.log(e);
      };
      ws.onmessage = e => {
        console.log('message', e.data);
      };

      return () => {
        ws.close();
        ws = null;
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [username]);

  return ws;
};

export default useSockets;
