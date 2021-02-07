import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blockchain-viewer',
  templateUrl: './blockchain-viewer.component.html',
  styleUrls: ['./blockchain-viewer.component.scss']
})
export class BlockchainViewerComponent implements OnInit {

  public blocks = [];
  constructor(private blockchainService: BlockchainService) { 
    this.blocks = blockchainService.getBlocks();
  }

  ngOnInit(): void {
  }

}
