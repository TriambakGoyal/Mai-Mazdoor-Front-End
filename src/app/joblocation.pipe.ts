import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'joblocation'
})
export class JoblocationPipe implements PipeTransform {

  transform(value: any, u_location: string): any {

    // console.log(value);

    if(u_location=="")
    {
      console.log("No location");
      return value;
    }

    const joblist: any[]=[];

    for(let i=0;i<value.length;i++)
    {
      var job_loc=value[i].contractor.contractor_location;
      console.log(value[i].contractor.contractor_location);
      console.log(value[i]);
    
      
        if(job_loc==u_location)
      {
      
        joblist.push(value[i]);
      }

      
      
    }
    // console.log(joblist);
    return joblist;
  }


}
