import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'jobSkill'
})
export class JobSkillPipe implements PipeTransform {

  transform(value: any, skills: any[]): any {

    if(skills.length == 0)
    {
      console.log("No Skill")
      return value;
    }

    const joblist:any[]=[];

    for(let i=0 ;i<value.length;i++)
    {
      for(let j=0;j<skills.length;j++)
      {

        if(value[i].job_skill.skill_desc == skills[j])
        {
          console.log('filter',skills[j]);
          console.log('skills',value[i].job_skill.skill_desc)
          joblist.push(value[i]);
        } 
      }
    }
    console.log(joblist);

    return joblist;

  }

}
