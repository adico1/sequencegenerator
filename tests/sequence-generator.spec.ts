
import { SequenceGenerator } from '../src/index';
import { Int } from '../src/int.d';
//import GetMacAddress from '../src/get-mac.adapter';

jest.mock('../src/get-mac.adapter');

describe('SequenceGenerator', () => {
  it('generate', () => {
    const mockMath = Object.create(global.Math);
    mockMath.random = () => 0.5;
    global.Math = mockMath;

    const mockDate = Object.create(global.Date);
    mockDate.now = () => 1578706932473;
    global.Date = mockDate;

    const sg = new SequenceGenerator(245 as Int);
    expect(sg.nextId()).toBe(3192868864);
    expect(sg.nextId()).toBe(3192868865);
    expect(sg.nextId()).toBe(3192868866);
    expect(sg.nextId()).toBe(3192868867);
    expect(sg.nextId()).toBe(3192868868);

    const sg2 = new SequenceGenerator(null);
    expect(sg2.nextId()).toBe(3194200064);
    expect(sg2.nextId()).toBe(3194200065);
    expect(sg2.nextId()).toBe(3194200066);
    expect(sg2.nextId()).toBe(3194200067);
    expect(sg2.nextId()).toBe(3194200068);

    const sg3 = new SequenceGenerator(570 as Int);
    expect(sg3.nextId()).toBe(3194200064);
    expect(sg3.nextId()).toBe(3194200065);
    expect(sg3.nextId()).toBe(3194200066);
    expect(sg3.nextId()).toBe(3194200067);
    expect(sg3.nextId()).toBe(3194200068);
  });  
});
  