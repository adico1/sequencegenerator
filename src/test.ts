import { suite } from 'kava'
import { equal } from 'assert-helpers'
import { SequenceGenerator } from '.'
import { Int } from './int.d'

declare global {
	namespace NodeJS {
		interface Global {
			inTest: boolean
		}
	}
}

suite('@adico/sequencegenerator', function(suite, test) {
	test('sequence nodeId as const value', function() {
		const mockMath = Object.create(global.Math)
		mockMath.random = () => 0.5
		global.Math = mockMath

		const mockDate = Object.create(global.Date)
		mockDate.now = () => 1578706932473
		global.Date = mockDate

		const sg = new SequenceGenerator(245 as Int)
		equal(sg.nextId(), 3192868864)
		equal(sg.nextId(), 3192868865)
		equal(sg.nextId(), 3192868866)
		equal(sg.nextId(), 3192868867)
		equal(sg.nextId(), 3192868868)
	})

	test('sequence nodeId as null', function() {
		const mockMath = Object.create(global.Math)
		mockMath.random = () => 0.5
		global.Math = mockMath

		const mockDate = Object.create(global.Date)
		mockDate.now = () => 1578706932473
		global.Date = mockDate

		global.inTest = true

		const sg2 = new SequenceGenerator(null)
		equal(sg2.nextId(), 3194200064)
		equal(sg2.nextId(), 3194200065)
		equal(sg2.nextId(), 3194200066)
		equal(sg2.nextId(), 3194200067)
		equal(sg2.nextId(), 3194200068)
	})

	test('sequence nodeId as const value same as null', function() {
		const mockMath = Object.create(global.Math)
		mockMath.random = () => 0.5
		global.Math = mockMath

		const mockDate = Object.create(global.Date)
		mockDate.now = () => 1578706932473
		global.Date = mockDate

		const sg3 = new SequenceGenerator(570 as Int)
		equal(sg3.nextId(), 3194200064)
		equal(sg3.nextId(), 3194200065)
		equal(sg3.nextId(), 3194200066)
		equal(sg3.nextId(), 3194200067)
		equal(sg3.nextId(), 3194200068)
	})
})
