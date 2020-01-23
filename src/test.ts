import { suite } from 'kava'
import { equal } from 'assert-helpers'
import { SequenceGenerator } from '.'

suite('@adico/sequencegenerator', function(suite, test) {
	test('sequence nodeId as const value', function() {
		const mockMath = Object.create(global.Math)
		mockMath.random = () => 0.5
		global.Math = mockMath

		const mockDate = Object.create(global.Date)
		mockDate.now = () => 1578706932473
		global.Date = mockDate

		const sg = new SequenceGenerator(245)
		equal(sg.nextId(), 3192868864)
		equal(sg.nextId(), 3192868865)
		equal(sg.nextId(), 3192868866)
		equal(sg.nextId(), 3192868867)
		equal(sg.nextId(), 3192868868)
	})

	test('sequence nodeId as -1', function() {
		const mockMath = Object.create(global.Math)
		mockMath.random = () => 0.5
		global.Math = mockMath

		const mockDate = Object.create(global.Date)
		mockDate.now = () => 1578706932473
		global.Date = mockDate

		try {
			const a = new SequenceGenerator(-1)
		} catch (ex) {
			equal(
				ex.message,
				`NodeId must be between 0 and ${SequenceGenerator.maxNodeId}`
			)
		}
	})

	test('sequence nodeId as SequenceGenerator.maxNodeId + 1', function() {
		const mockMath = Object.create(global.Math)
		mockMath.random = () => 0.5
		global.Math = mockMath

		const mockDate = Object.create(global.Date)
		mockDate.now = () => 1578706932473
		global.Date = mockDate

		try {
			const a = new SequenceGenerator(SequenceGenerator.maxNodeId + 1)
		} catch (ex) {
			equal(
				ex.message,
				`NodeId must be between 0 and ${SequenceGenerator.maxNodeId}`
			)
		}
	})
})
