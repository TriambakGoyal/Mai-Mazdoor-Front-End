import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'startDate'
})
export class StartDatePipe implements PipeTransform {

  transform(value: any, job_date: string): any {
    
    if(job_date==null)
    {
      // console.log("No date")
      return value;
    }

    
    const joblist: any[]=[];

    for(let i=0;i<value.length;i++)
    {
      var job_d=value[i].job_start_date;
    
      
        if(job_d>=job_date)
      {
        // console.log("filter date",job_date);
        // console.log("job_date",value[i].job_start_date);

        joblist.push(value[i]);
      }

      
      
    }
    // console.log(joblist);
    return joblist;
  }

}
