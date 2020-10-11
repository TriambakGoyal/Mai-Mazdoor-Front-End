import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'Joblocation'
})
export class LocationPipe implements PipeTransform {

  transform(value: any, u_location: string): any {

    // console.log(value);

    if(u_location==="")
    {
      // console.log(u_location);
      return value;
    }

    const joblist: any[]=[];

    for(let i=0;i<value.length;i++)
    {
      // var job_loc=value[i].contractor.contractor_location;
      // console.log(value[i].contractor.contractor_location);
      // console.log(value[i]);
      // console.log(job_loc);
      if(value[i]["job_name"]){
        if(value[i]["job_name"]==u_location)
      {
        console.log("hello");
      
        joblist.push(value[i]);
      }

      }
      
    }
    // console.log(joblist);
    return joblist;
  }

}
