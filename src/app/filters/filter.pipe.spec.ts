import { FilterPipe } from './filter.pipe';
import { TodoDataService } from '../services/todoservice/todo-data.service';

describe('FilterPipe', () => {
  let pipe : FilterPipe;
  let dataservice:TodoDataService;

  beforeEach(()=>{
    pipe = new FilterPipe();
    dataservice = new TodoDataService();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('returns an whole array if status is all',()=>{
    dataservice.getAllTasks().then(res=>{
      expect(pipe.transform(res,'all')).toBe(res);      
    });
  })

  it('returns only active tasks if status is active',()=>{
    dataservice.getAllTasks().then(res=>{
      expect(pipe.transform(res,'active')).toBe([]);      
    });
  })

});
