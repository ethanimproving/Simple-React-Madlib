import React from 'react';

export const Madlib = props => (
         <>
           <div className="mt-3">
             <div className="d-flex">
               <h4>Madlib</h4>
             </div>
               <div className="card mb-3 bg-light">
                 <div className="card-body">
                   <div>
                     <div className="d-flex mb-2">
                       <p>
                       {props.madlib.map((line, i) => (
                          <>{line}{props.answers[i]}</>
                      ))}
                       </p>
                     </div>
                   </div>
                 </div>
               </div>
           </div>
         </>
       );