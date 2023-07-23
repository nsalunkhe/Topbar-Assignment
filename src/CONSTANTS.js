import i1 from './assets/images/1.png';
import i2 from './assets/images/2.png';
import i3 from './assets/images/3.png';
import i4 from './assets/images/4.png';
import dummyProfile from './assets/images/dummy-profile.png';
import dummyProfile2 from './assets/images/dummyProfile2.png';
import dummyProfile3 from './assets/images/dummyProfile3.png';
import dummyProfile4 from './assets/images/dummyProfile4.png';
import dummyBlog from './assets/images/dummy-blog.png';

const CONSTANTS = {
	tablet: 940,
	mobile: 600,
	fontBreakpoint: 1025,
	mentions: [
		{ label: 'The Hindu', link: 'loremipsum.com/lorem' },
		{ label: 'The Times of India', link: 'loremipsum.com/lorem' },
		{ label: 'The Hindu', link: 'loremipsum.com/lorem' },
	],
	testimonials: [
		{
			name: 'John D.',
			img: dummyProfile,
			remark:
				'“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna”',
			occupation: 'Business Owner',
		},
		{
			name: 'John D.',
			img: dummyProfile,
			remark:
				'“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna”',
			occupation: 'Business Owner',
		},
		{
			name: 'John D.',
			img: dummyProfile,
			remark:
				'“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna”',
			occupation: 'Business Owner',
		},
		{
			name: 'John D.',
			img: dummyProfile,
			remark:
				'“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna”',
			occupation: 'Business Owner',
		},
	],
	blogs: [
		{
			img: dummyBlog,
			title:
				'The Art of Making Traditional Sweets: Preserving Timeless Flavors',
			link: '',
			duration: '5 min',
			date: '12th Oct 2022',
		},
		{
			img: dummyBlog,
			title:
				'The Art of Making Traditional Sweets: Preserving Timeless Flavors',
			link: '',
			duration: '5 min',
			date: '12th Oct 2022',
		},
		{
			img: dummyBlog,
			title:
				'The Art of Making Traditional Sweets: Preserving Timeless Flavors',
			link: '',
			duration: '5 min',
			date: '12th Oct 2022',
		},
	],
	products: [
		{
			id: 1197,
			detailed_desc:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim voluptates quos maiores repellat magnam, mollitia consectetur sunt! Corrupti, quae eaque rerum officia rem obcaecati exercitationem reiciendis aliquam tempora, fugiat quidem minima architecto deserunt possimus ducimus voluptatibus quam consectetur eos vitae itaque aspernatur similique doloribus odit! Necessitatibus dolore distinctio facere assumenda molestias, nihil accusantium excepturi nulla ipsa magni, eos optio veniam tempore perspiciatis aliquid in. Itaque, mollitia? Cum provident quis voluptates ullam possimus ad hic deserunt laborum dolore eaque est quidem dicta atque quasi, nihil sequi at facere ut magni saepe iure tempora aperiam error a! Dolorem aspernatur recusandae eveniet. Nesciunt.',
			product_name: 'Grande 1',
			shelf_life: '8',
			is_avail_out_of_mum: 1,
			'productcatalogs.id': 6,
			'productcatalogs.catalog_name': '2_8_ctlg',
			'productcatalogs.prodctlgprod.id': 5524,
			'productcatalogs.prodctlgprod.barcode': 'NA',
			'productcatalogs.prodctlgprod.size': '1',
			'productcatalogs.prodctlgprod.product_base_rate': '4955.36',
			'productcatalogs.prodctlgprod.product_tax_rate': '0.12',
			'productcatalogs.prodctlgprod.product_mrp': '5550.00',
			'productcatalogs.prodctlgprod.is_product_instock': 1,
			'productcatalogs.prodctlgprod.deliveryTime': 'Less than 2 hrs',
			'productcatalogs.prodctlgprod.sizevariants': null,
			'categories.id': 144,
			'categories.category_name': 'Grande',
			'productdocuments.document_url': i1,
			'uom.unit_name': 'piece',
			'uom.unit': 'pc',
			desc: `Gulab Jamuns are delightful milk-based dumplings soaked in fragrant
  syrup, offering a melt-in-your-mouth experience with their sweet and
  aromatic flavor. Perfect for celebrations and special occasions, these
  spongy treats are a true indulgence for sweet lovers.`,
			size: {
				s: 12,
				m: 15,
				l: 20,
			},
			tags: ['Diwali', 'Sweets'],
			catagory: 'Sweets',
			sku: 'SS001',
		},
		{
			id: 1116,
			detailed_desc:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim voluptates quos maiores repellat magnam, mollitia consectetur sunt! Corrupti, quae eaque rerum officia rem obcaecati exercitationem reiciendis aliquam tempora, fugiat quidem minima architecto deserunt possimus ducimus voluptatibus quam consectetur eos vitae itaque aspernatur similique doloribus odit! Necessitatibus dolore distinctio facere assumenda molestias, nihil accusantium excepturi nulla ipsa magni, eos optio veniam tempore perspiciatis aliquid in. Itaque, mollitia? Cum provident quis voluptates ullam possimus ad hic deserunt laborum dolore eaque est quidem dicta atque quasi, nihil sequi at facere ut magni saepe iure tempora aperiam error a! Dolorem aspernatur recusandae eveniet. Nesciunt.',
			product_name: 'Equisite Hamper 1',
			shelf_life: '8',
			is_avail_out_of_mum: 1,
			'productcatalogs.id': 6,
			'productcatalogs.catalog_name': '2_8_ctlg',
			'productcatalogs.prodctlgprod.id': 5441,
			'productcatalogs.prodctlgprod.barcode': 'NA',
			'productcatalogs.prodctlgprod.size': '1',
			'productcatalogs.prodctlgprod.product_base_rate': '3214.29',
			'productcatalogs.prodctlgprod.product_tax_rate': '0.12',
			'productcatalogs.prodctlgprod.product_mrp': '3600.00',
			'productcatalogs.prodctlgprod.is_product_instock': 0,
			'productcatalogs.prodctlgprod.deliveryTime': '1 day(s) 12:00',
			'productcatalogs.prodctlgprod.sizevariants': null,
			'categories.id': 143,
			'categories.category_name': 'Exquisite',
			'productdocuments.document_url': i2,
			'uom.unit_name': 'packet',
			'uom.unit': 'pk',
			desc: `Gulab Jamuns are delightful milk-based dumplings soaked in fragrant
  syrup, offering a melt-in-your-mouth experience with their sweet and
  aromatic flavor. Perfect for celebrations and special occasions, these
  spongy treats are a true indulgence for sweet lovers.`,
			size: {
				s: 12,
				m: 15,
				l: 20,
			},
			tags: ['Diwali', 'Sweets'],
			catagory: 'Sweets',
			sku: 'SS001',
		},
		{
			id: 1193,
			detailed_desc:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim voluptates quos maiores repellat magnam, mollitia consectetur sunt! Corrupti, quae eaque rerum officia rem obcaecati exercitationem reiciendis aliquam tempora, fugiat quidem minima architecto deserunt possimus ducimus voluptatibus quam consectetur eos vitae itaque aspernatur similique doloribus odit! Necessitatibus dolore distinctio facere assumenda molestias, nihil accusantium excepturi nulla ipsa magni, eos optio veniam tempore perspiciatis aliquid in. Itaque, mollitia? Cum provident quis voluptates ullam possimus ad hic deserunt laborum dolore eaque est quidem dicta atque quasi, nihil sequi at facere ut magni saepe iure tempora aperiam error a! Dolorem aspernatur recusandae eveniet. Nesciunt.',
			product_name: 'Luxury 2',
			shelf_life: '8',
			is_avail_out_of_mum: 1,
			'productcatalogs.id': 6,
			'productcatalogs.catalog_name': '2_8_ctlg',
			'productcatalogs.prodctlgprod.id': 5520,
			'productcatalogs.prodctlgprod.barcode': 'NA',
			'productcatalogs.prodctlgprod.size': '1',
			'productcatalogs.prodctlgprod.product_base_rate': '3213.39',
			'productcatalogs.prodctlgprod.product_tax_rate': '0.12',
			'productcatalogs.prodctlgprod.product_mrp': '3599.00',
			'productcatalogs.prodctlgprod.is_product_instock': 1,
			'productcatalogs.prodctlgprod.deliveryTime': 'Less than 2 hrs',
			'productcatalogs.prodctlgprod.sizevariants': null,
			'categories.id': 145,
			'categories.category_name': 'Luxury',
			'productdocuments.document_url': i3,
			'uom.unit_name': 'piece',
			'uom.unit': 'pc',
			desc: `Gulab Jamuns are delightful milk-based dumplings soaked in fragrant
  syrup, offering a melt-in-your-mouth experience with their sweet and
  aromatic flavor. Perfect for celebrations and special occasions, these
  spongy treats are a true indulgence for sweet lovers.`,
			size: {
				s: 12,
				m: 15,
				l: 20,
			},
			tags: ['Diwali', 'Sweets'],
			catagory: 'Sweets',
			sku: 'SS001',
		},
		{
			id: 1194,
			detailed_desc:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim voluptates quos maiores repellat magnam, mollitia consectetur sunt! Corrupti, quae eaque rerum officia rem obcaecati exercitationem reiciendis aliquam tempora, fugiat quidem minima architecto deserunt possimus ducimus voluptatibus quam consectetur eos vitae itaque aspernatur similique doloribus odit! Necessitatibus dolore distinctio facere assumenda molestias, nihil accusantium excepturi nulla ipsa magni, eos optio veniam tempore perspiciatis aliquid in. Itaque, mollitia? Cum provident quis voluptates ullam possimus ad hic deserunt laborum dolore eaque est quidem dicta atque quasi, nihil sequi at facere ut magni saepe iure tempora aperiam error a! Dolorem aspernatur recusandae eveniet. Nesciunt.',
			product_name: 'Luxury 3',
			shelf_life: '8',
			is_avail_out_of_mum: 1,
			'productcatalogs.id': 6,
			'productcatalogs.catalog_name': '2_8_ctlg',
			'productcatalogs.prodctlgprod.id': 5521,
			'productcatalogs.prodctlgprod.barcode': 'NA',
			'productcatalogs.prodctlgprod.size': '1',
			'productcatalogs.prodctlgprod.product_base_rate': '3213.39',
			'productcatalogs.prodctlgprod.product_tax_rate': '0.12',
			'productcatalogs.prodctlgprod.product_mrp': '3599.00',
			'productcatalogs.prodctlgprod.is_product_instock': 1,
			'productcatalogs.prodctlgprod.deliveryTime': 'Less than 2 hrs',
			'productcatalogs.prodctlgprod.sizevariants': null,
			'categories.id': 145,
			'categories.category_name': 'Luxury',
			'productdocuments.document_url': i4,
			'uom.unit_name': 'piece',
			'uom.unit': 'pc',
			desc: `Gulab Jamuns are delightful milk-based dumplings soaked in fragrant
  syrup, offering a melt-in-your-mouth experience with their sweet and
  aromatic flavor. Perfect for celebrations and special occasions, these
  spongy treats are a true indulgence for sweet lovers.`,
			size: {
				s: 12,
				m: 15,
				l: 20,
			},
			tags: ['Diwali', 'Sweets'],
			catagory: 'Sweets',
			sku: 'SS001',
		},
		{
			id: 1197,
			detailed_desc:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim voluptates quos maiores repellat magnam, mollitia consectetur sunt! Corrupti, quae eaque rerum officia rem obcaecati exercitationem reiciendis aliquam tempora, fugiat quidem minima architecto deserunt possimus ducimus voluptatibus quam consectetur eos vitae itaque aspernatur similique doloribus odit! Necessitatibus dolore distinctio facere assumenda molestias, nihil accusantium excepturi nulla ipsa magni, eos optio veniam tempore perspiciatis aliquid in. Itaque, mollitia? Cum provident quis voluptates ullam possimus ad hic deserunt laborum dolore eaque est quidem dicta atque quasi, nihil sequi at facere ut magni saepe iure tempora aperiam error a! Dolorem aspernatur recusandae eveniet. Nesciunt.',
			product_name: 'Grande 1',
			shelf_life: '8',
			is_avail_out_of_mum: 1,
			'productcatalogs.id': 6,
			'productcatalogs.catalog_name': '2_8_ctlg',
			'productcatalogs.prodctlgprod.id': 5524,
			'productcatalogs.prodctlgprod.barcode': 'NA',
			'productcatalogs.prodctlgprod.size': '1',
			'productcatalogs.prodctlgprod.product_base_rate': '4955.36',
			'productcatalogs.prodctlgprod.product_tax_rate': '0.12',
			'productcatalogs.prodctlgprod.product_mrp': '5550.00',
			'productcatalogs.prodctlgprod.is_product_instock': 1,
			'productcatalogs.prodctlgprod.deliveryTime': 'Less than 2 hrs',
			'productcatalogs.prodctlgprod.sizevariants': null,
			'categories.id': 144,
			'categories.category_name': 'Grande',
			'productdocuments.document_url': i1,
			'uom.unit_name': 'piece',
			'uom.unit': 'pc',
			desc: `Gulab Jamuns are delightful milk-based dumplings soaked in fragrant
      syrup, offering a melt-in-your-mouth experience with their sweet and
      aromatic flavor. Perfect for celebrations and special occasions, these
      spongy treats are a true indulgence for sweet lovers.`,
			size: {
				s: 12,
				m: 15,
				l: 20,
			},
			tags: ['Diwali', 'Sweets'],
			catagory: 'Sweets',
			sku: 'SS001',
		},
		{
			id: 1116,
			detailed_desc:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim voluptates quos maiores repellat magnam, mollitia consectetur sunt! Corrupti, quae eaque rerum officia rem obcaecati exercitationem reiciendis aliquam tempora, fugiat quidem minima architecto deserunt possimus ducimus voluptatibus quam consectetur eos vitae itaque aspernatur similique doloribus odit! Necessitatibus dolore distinctio facere assumenda molestias, nihil accusantium excepturi nulla ipsa magni, eos optio veniam tempore perspiciatis aliquid in. Itaque, mollitia? Cum provident quis voluptates ullam possimus ad hic deserunt laborum dolore eaque est quidem dicta atque quasi, nihil sequi at facere ut magni saepe iure tempora aperiam error a! Dolorem aspernatur recusandae eveniet. Nesciunt.',
			product_name: 'Equisite Hamper 1',
			shelf_life: '8',
			is_avail_out_of_mum: 1,
			'productcatalogs.id': 6,
			'productcatalogs.catalog_name': '2_8_ctlg',
			'productcatalogs.prodctlgprod.id': 5441,
			'productcatalogs.prodctlgprod.barcode': 'NA',
			'productcatalogs.prodctlgprod.size': '1',
			'productcatalogs.prodctlgprod.product_base_rate': '3214.29',
			'productcatalogs.prodctlgprod.product_tax_rate': '0.12',
			'productcatalogs.prodctlgprod.product_mrp': '3600.00',
			'productcatalogs.prodctlgprod.is_product_instock': 0,
			'productcatalogs.prodctlgprod.deliveryTime': '1 day(s) 12:00',
			'productcatalogs.prodctlgprod.sizevariants': null,
			'categories.id': 143,
			'categories.category_name': 'Exquisite',
			'productdocuments.document_url': i2,
			'uom.unit_name': 'packet',
			'uom.unit': 'pk',
			desc: `Gulab Jamuns are delightful milk-based dumplings soaked in fragrant
      syrup, offering a melt-in-your-mouth experience with their sweet and
      aromatic flavor. Perfect for celebrations and special occasions, these
      spongy treats are a true indulgence for sweet lovers.`,
			size: {
				s: 12,
				m: 15,
				l: 20,
			},
			tags: ['Diwali', 'Sweets'],
			catagory: 'Sweets',
			sku: 'SS001',
		},
		{
			id: 1193,
			detailed_desc:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim voluptates quos maiores repellat magnam, mollitia consectetur sunt! Corrupti, quae eaque rerum officia rem obcaecati exercitationem reiciendis aliquam tempora, fugiat quidem minima architecto deserunt possimus ducimus voluptatibus quam consectetur eos vitae itaque aspernatur similique doloribus odit! Necessitatibus dolore distinctio facere assumenda molestias, nihil accusantium excepturi nulla ipsa magni, eos optio veniam tempore perspiciatis aliquid in. Itaque, mollitia? Cum provident quis voluptates ullam possimus ad hic deserunt laborum dolore eaque est quidem dicta atque quasi, nihil sequi at facere ut magni saepe iure tempora aperiam error a! Dolorem aspernatur recusandae eveniet. Nesciunt.',
			product_name: 'Luxury 2',
			shelf_life: '8',
			is_avail_out_of_mum: 1,
			'productcatalogs.id': 6,
			'productcatalogs.catalog_name': '2_8_ctlg',
			'productcatalogs.prodctlgprod.id': 5520,
			'productcatalogs.prodctlgprod.barcode': 'NA',
			'productcatalogs.prodctlgprod.size': '1',
			'productcatalogs.prodctlgprod.product_base_rate': '3213.39',
			'productcatalogs.prodctlgprod.product_tax_rate': '0.12',
			'productcatalogs.prodctlgprod.product_mrp': '3599.00',
			'productcatalogs.prodctlgprod.is_product_instock': 1,
			'productcatalogs.prodctlgprod.deliveryTime': 'Less than 2 hrs',
			'productcatalogs.prodctlgprod.sizevariants': null,
			'categories.id': 145,
			'categories.category_name': 'Luxury',
			'productdocuments.document_url': i3,
			'uom.unit_name': 'piece',
			'uom.unit': 'pc',
			desc: `Gulab Jamuns are delightful milk-based dumplings soaked in fragrant
      syrup, offering a melt-in-your-mouth experience with their sweet and
      aromatic flavor. Perfect for celebrations and special occasions, these
      spongy treats are a true indulgence for sweet lovers.`,
			size: {
				s: 12,
				m: 15,
				l: 20,
			},
			tags: ['Diwali', 'Sweets'],
			catagory: 'Sweets',
			sku: 'SS001',
		},
		{
			id: 1194,
			detailed_desc:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim voluptates quos maiores repellat magnam, mollitia consectetur sunt! Corrupti, quae eaque rerum officia rem obcaecati exercitationem reiciendis aliquam tempora, fugiat quidem minima architecto deserunt possimus ducimus voluptatibus quam consectetur eos vitae itaque aspernatur similique doloribus odit! Necessitatibus dolore distinctio facere assumenda molestias, nihil accusantium excepturi nulla ipsa magni, eos optio veniam tempore perspiciatis aliquid in. Itaque, mollitia? Cum provident quis voluptates ullam possimus ad hic deserunt laborum dolore eaque est quidem dicta atque quasi, nihil sequi at facere ut magni saepe iure tempora aperiam error a! Dolorem aspernatur recusandae eveniet. Nesciunt.',
			product_name: 'Luxury 3',
			shelf_life: '8',
			is_avail_out_of_mum: 1,
			'productcatalogs.id': 6,
			'productcatalogs.catalog_name': '2_8_ctlg',
			'productcatalogs.prodctlgprod.id': 5521,
			'productcatalogs.prodctlgprod.barcode': 'NA',
			'productcatalogs.prodctlgprod.size': '1',
			'productcatalogs.prodctlgprod.product_base_rate': '3213.39',
			'productcatalogs.prodctlgprod.product_tax_rate': '0.12',
			'productcatalogs.prodctlgprod.product_mrp': '3599.00',
			'productcatalogs.prodctlgprod.is_product_instock': 1,
			'productcatalogs.prodctlgprod.deliveryTime': 'Less than 2 hrs',
			'productcatalogs.prodctlgprod.sizevariants': null,
			'categories.id': 145,
			'categories.category_name': 'Luxury',
			'productdocuments.document_url': i4,
			'uom.unit_name': 'piece',
			'uom.unit': 'pc',
			desc: `Gulab Jamuns are delightful milk-based dumplings soaked in fragrant
      syrup, offering a melt-in-your-mouth experience with their sweet and
      aromatic flavor. Perfect for celebrations and special occasions, these
      spongy treats are a true indulgence for sweet lovers.`,
			size: {
				s: 12,
				m: 15,
				l: 20,
			},
			tags: ['Diwali', 'Sweets'],
			catagory: 'Sweets',
			sku: 'SS001',
		},
	],
	team:[
		{
		   id:1,
           name:'full name',
		   image:dummyProfile2,
		   title:'Job title',
		   desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
		   linkedin:"",
		   twitter:"",
		   mail:""
		},
		{
			id:2,
			name:'full name',
			image:dummyProfile3,
			title:'Job title',
			desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
			linkedin:"",
			twitter:"",
			mail:""
		 },
		 {
			id:3,
			name:'full name',
			image:dummyProfile4,
			title:'Job title',
			desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
			linkedin:"",
			twitter:"",
			mail:""
		 },
		 {
			id:4,
			name:'full name',
			image:dummyProfile,
			title:'Job title',
			desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
			linkedin:"",
			twitter:"",
			mail:""
		 },	
         {
			id:5,
			name:'full name',
			image:dummyProfile,
			title:'Job title',
			desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
			linkedin:"",
			twitter:"",
			mail:""
		 },	
		 {
			id:6,
			name:'full name',
			image:dummyProfile,
			title:'Job title',
			desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
			linkedin:"",
			twitter:"",
			mail:""
		 },	
		 {
			id:7,
			name:'full name',
			image:dummyProfile,
			title:'Job title',
			desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
			linkedin:"",
			twitter:"",
			mail:""
		 },	
         {
			id:8,
			name:'full name',
			image:dummyProfile,
			title:'Job title',
			desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
			linkedin:"",
			twitter:"",
			mail:""
		 },	
		 {
			id:9,
			name:'full name',
			image:dummyProfile,
			title:'Job title',
			desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
			linkedin:"",
			twitter:"",
			mail:""
		 },	
		 {
			id:10,
			name:'full name',
			image:dummyProfile,
			title:'Job title',
			desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
			linkedin:"",
			twitter:"",
			mail:""
		 },	
         {
			id:11,
			name:'full name',
			image:dummyProfile,
			title:'Job title',
			desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
			linkedin:"",
			twitter:"",
			mail:""
		 },	
		 {
			id:12,
			name:'full name',
			image:dummyProfile,
			title:'Job title',
			desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
			linkedin:"",
			twitter:"",
			mail:""
		 },
		 {
			id:13,
			name:'full name',
			image:dummyProfile,
			title:'Job title',
			desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
			linkedin:"",
			twitter:"",
			mail:""
		 },	
         {
			id:14,
			name:'full name',
			image:dummyProfile,
			title:'Job title',
			desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
			linkedin:"",
			twitter:"",
			mail:""
		 },	
		 {
			id:15,
			name:'full name',
			image:dummyProfile,
			title:'Job title',
			desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
			linkedin:"",
			twitter:"",
			mail:""
		 },	

	







	]
};
export default CONSTANTS;
