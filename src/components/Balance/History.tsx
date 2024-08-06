import { useEffect, useState } from "react";
import Nav from "../Nav/Nav";
import axios from "axios";
import { baseUrl } from "../../services/apiClient";

interface History {
  amount: string;
  reason: string;
  user_id: number;
  chapa_data: null | string;
  created_at: string;
}

const History = () => {
  const [history, setHistory] = useState<History[]>([]);

  useEffect(() => {
    axios
      .get<History[]>(`${baseUrl}/payment/tx-history`, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      })
      .then((response) => {
        console.log(response.data);
        setHistory(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(history);

  return (
    <div className="bg">
      <Nav />
      <div className="container mx-auto flex justify-center align-middle h-auto pt-24">
        <div className="lg:w-[38%] px-2">
          <div className="sticky top-20 grid grid-cols-7 bg-black text-white rounded mb-3">
            <div className="col-2">
              <p>ID</p>
            </div>
            <div className="col-2">
              <p>Type</p>
            </div>
            <div className="col-2">
              <p>Date</p>
            </div>
            <div className="col-1">
              <p>Amount</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
