import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import "jquery/dist/jquery.min.js";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import "datatables.net-buttons/js/dataTables.buttons.js";
import "datatables.net-buttons/js/buttons.colVis.js";
import "datatables.net-buttons/js/buttons.flash.js";
import "datatables.net-buttons/js/buttons.html5.js";
import "datatables.net-buttons/js/buttons.print.js";
import $ from "jquery";
import styled from 'styled-components';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { BsFillCollectionPlayFill } from 'react-icons/bs';
import { FcOk, FcCancel, FcPlus } from "react-icons/fc";

let total = 0;

const names = [
  {
    "url" : "img1.jpg",
    "title" : "Template",
    "lastname" : "Luke",
    "time" : "00:00:38",
    "slides" : "05",
    "status" : "Ready"
  },
  {
    "url" : "img2.jpg",
    "title" : "Michael",
    "lastname" : "Jackson",
    "time" : "00:00:38",
    "slides" : "07",
    "status" : "Ready"
  },
  {
    "url" : "img3.jpg",
    "title" : "Janet",
    "lastname" : "Jackson",
    "time" : "00:00:38",
    "slides" : "03",
    "status" : "Ready"
  }
]

total = names.length();

const componentDidMount = () => {
    if (!$.fn.DataTable.isDataTable("#myTable")) {
               $(document).ready(function () {
                 setTimeout(function () {
                   $("#table").DataTable({
                     pagingType: "full_numbers",
                     pageLength: 20,
                     processing: true,
                     dom: "Bfrtip",
                     "bDestroy": true,
                     select: {
                       style: "single",
                     },
         
                     buttons: [
                       {
                         extend: "pageLength",
                         className: "btn btn-primary",
                       },
                       {
                         extend: "copy",
                         className: "btn btn-primary",
                       },
                       {
                         extend: "csv",
                         className: "btn btn-primary",
                       },
                       {
                         extend: "print",
                         customize: function (win) {
                           $(win.document.body).css("font-size", "10pt");
                           $(win.document.body)
                             .find("table")
                             .addClass("compact")
                             .css("font-size", "inherit");
                         },
                         className: "btn btn-primary",
                       },
                     ],
         
                     fnRowCallback: function (
                       nRow,
                       aData,
                       iDisplayIndex,
                       iDisplayIndexFull
                     ) {
                       var index = iDisplayIndexFull + 1;
                       $("td:first", nRow).html(index);
                       return nRow;
                     },
         
                     lengthMenu: [
                       [10, 20, 30, 50, -1],
                       [10, 20, 30, 50, "All"],
                     ],
                     columnDefs: [
                       {
                         targets: 0,
                         render: function (data, type, row, meta) {
                           return type === "export" ? meta.row + 1 : data;
                         },
                       },
                     ],
                   });
                 }, 1000);
               });
             }
   }  
   
   const showTable = () => {
           try {
             return names.map((item, index) => {
               return (
                   <tr>
                    <td className="text-xs fw-bold">{index +1}</td>
                    <td className="text-xs fw-bold"><img src={item.url} alt='img' height='60px' /></td>
                    <td className="text-xs fw-bold">{item.title+ ' ' + item.lastname}</td>
                    <td className="text-xs fw-bold">{item.time}</td>
                    <td className="text-xs fw-bold"><FcOk /> {item.status}</td>
                    <td className="text-xs fw-bold">{item.slides}</td>
                    <td className="text-xs fw-bold"><BsFillCollectionPlayFill /></td>
                  </tr>
                   );
             });
           } catch (e) {
             alert(e.message);
           }
         };
const datatable = () => {
    componentDidMount();
  return (
       
         <div class="container py-4">
          <TitleDiv>
            <Title>Videos <span>{ total }</span></Title>
            <Button variant="primary">Create New Video</Button>{' '}
          </TitleDiv>
          <Divider />
                <div class="table-responsive p-0 pb-2">
                    <Table hover id="table" className="table table-borderless mb-0">
                            <thead>
                                <tr>
                                <th className=" text-secondary text-sm fw-bolder opacity-7 ps-2">S/N</th>
                                <th className=" text-secondary text-sm fw-bolder opacity-7 ps-2">url</th>
                                <th className=" text-secondary text-sm fw-bolder opacity-7 ps-2">Title</th>
                                <th className=" text-secondary text-sm fw-bolder opacity-7 ps-2">Time</th>
                                <th className=" text-secondary text-sm fw-bolder opacity-7 ps-2">status</th>
                                <th className=" text-secondary text-sm fw-bolder opacity-7 ps-2">slides</th>
                                <th className=" text-secondary text-sm fw-bolder opacity-7 ps-2">Action</th>
                                <th></th>
                                </tr>
                            </thead>
                
                            <tbody>
                                    {showTable()}
                            </tbody>
                    </Table>
                  </div>
                  </div>
       )
}

export default datatable;

const TitleDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-family: 'Roboto', sans-serif;
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`

const Divider = styled.div`
   border-bottom: 3px solid #d3d3d3;
   margin: 30px auto;
`
